import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import Container from '../UI/Container';
import Card from '../UI/Card';

const StatisticsSection = () => {
  // Response time comparison data
  const responseTimeData = [
    { name: 'Urban', before: 11, after: 7.7 },
    { name: 'Suburban', before: 15, after: 10.5 },
    { name: 'Rural', before: 19, after: 12.8 },
  ];
  
  // Network reliability data
  const reliabilityData = [
    { name: 'Reliable', value: 85 },
    { name: 'Unreliable', value: 15 },
  ];
  
  // Impact statistics
  const impactStats = [
    { label: "Response Time Reduction", value: "30%", description: "In urban cardiac emergencies" },
    { label: "Rural Reliability", value: "85%", description: "Through mesh networking" },
    { label: "Trained Volunteers", value: "450+", description: "Across Hyderabad and Vikarabad" },
    { label: "Dependency Reduction", value: "20%", description: "On centralized systems" },
  ];
  
  // Animation variants
  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    },
  };
  
  // Colors
  const COLORS = ['#4caf50', '#f44336'];
  
  return (
    <motion.section 
      className="py-16 bg-primary-light"
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Impact Statistics</h2>
          <p className="text-secondary-dark max-w-2xl mx-auto">
            Real-world results from our system implementation across Hyderabad and Vikarabad districts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Response Time Chart */}
          <Card variant="dark" className="p-6">
            <h3 className="text-xl font-bold text-secondary mb-4">Emergency Response Times (minutes)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={responseTimeData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#333', borderColor: '#555' }} 
                    itemStyle={{ color: '#fff' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="before" name="Legacy System" fill="#f44336" />
                  <Bar dataKey="after" name="Rescue Connect" fill="#4caf50" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
          
          {/* Reliability Chart */}
          <Card variant="dark" className="p-6">
            <h3 className="text-xl font-bold text-secondary mb-4">Rural Connectivity Reliability</h3>
            <div className="h-80 flex flex-col items-center justify-center">
              <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                  <Pie
                    data={reliabilityData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {reliabilityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#333', borderColor: '#555' }} 
                    itemStyle={{ color: '#fff' }}
                    labelStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <p className="text-secondary-dark text-sm">
                Using hybrid LoRaWAN & SMS fallback technologies during monsoons
              </p>
            </div>
          </Card>
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-primary rounded-lg shadow-neumorph p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <p className="text-4xl font-bold text-secondary mb-2">{stat.value}</p>
              <h3 className="text-lg font-semibold text-secondary mb-1">{stat.label}</h3>
              <p className="text-secondary-dark text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default StatisticsSection;