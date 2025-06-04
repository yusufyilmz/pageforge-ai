// 'use client'

// import React, { useState } from 'react'
// import {
//   Grid,
//   Card,
//   Text,
//   Flex,
//   Button,
//   Switch,
//   Icon,
//   Progress,
//   Badge,
//   Avatar
// } from '@pageforge/once-ui/components'

// // Example 1: Interactive Pricing Calculator
// export function PricingCalculatorExample() {
//   const [isYearly, setIsYearly] = useState(false)

//   const plans = [
//     {
//       name: 'Starter',
//       monthlyPrice: 9,
//       yearlyPrice: 90,
//       features: ['5 Projects', '10GB Storage', 'Email Support'],
//       popular: false
//     },
//     {
//       name: 'Professional',
//       monthlyPrice: 29,
//       yearlyPrice: 290,
//       features: [
//         '50 Projects',
//         '100GB Storage',
//         'Priority Support',
//         'Advanced Analytics'
//       ],
//       popular: true
//     },
//     {
//       name: 'Enterprise',
//       monthlyPrice: 99,
//       yearlyPrice: 990,
//       features: [
//         'Unlimited Projects',
//         '1TB Storage',
//         '24/7 Support',
//         'Custom Integrations',
//         'SSO'
//       ],
//       popular: false
//     }
//   ]

//   return (
//     <Flex direction="column" gap="xl" className="pricing-calculator">
//       <Flex alignItems="center" justifyContent="center" gap="m">
//         <Text variant="body-default-m">Monthly</Text>
//         <Switch checked={isYearly} onCheckedChange={setIsYearly} />
//         <Text variant="body-default-m">Yearly (Save 20%)</Text>
//       </Flex>

//       <Grid columns="3" gap="l">
//         {plans.map((plan, index) => (
//           <Card
//             key={index}
//             className={plan.popular ? 'popular-plan' : ''}
//             padding="l"
//           >
//             <Flex direction="column" gap="m">
//               {plan.popular && <Badge variant="primary">Most Popular</Badge>}
//               <Text variant="heading-strong-m">{plan.name}</Text>
//               <Flex alignItems="baseline" gap="s">
//                 <Text variant="display-strong-s">
//                   ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
//                 </Text>
//                 <Text variant="body-default-s" color="secondary">
//                   /{isYearly ? 'year' : 'month'}
//                 </Text>
//               </Flex>

//               <Flex direction="column" gap="s">
//                 {plan.features.map((feature, idx) => (
//                   <Flex key={idx} alignItems="center" gap="s">
//                     <Icon name="check" size="s" />
//                     <Text variant="body-default-s">{feature}</Text>
//                   </Flex>
//                 ))}
//               </Flex>

//               <Button variant={plan.popular ? 'primary' : 'secondary'} size="m">
//                 Get Started
//               </Button>
//             </Flex>
//           </Card>
//         ))}
//       </Grid>
//     </Flex>
//   )
// }

// // Example 2: Learning Dashboard with Progress
// export function LearningDashboardExample() {
//   const courses = [
//     {
//       name: 'React Fundamentals',
//       progress: 85,
//       lessons: 12,
//       completed: 10,
//       color: 'blue'
//     },
//     {
//       name: 'TypeScript Mastery',
//       progress: 60,
//       lessons: 15,
//       completed: 9,
//       color: 'green'
//     },
//     {
//       name: 'Next.js Advanced',
//       progress: 30,
//       lessons: 20,
//       completed: 6,
//       color: 'purple'
//     }
//   ]

//   const achievements = [
//     {
//       name: 'First Course',
//       icon: 'star',
//       earned: true,
//       description: 'Complete your first course'
//     },
//     {
//       name: 'Speed Learner',
//       icon: 'zap',
//       earned: true,
//       description: 'Finish a course in under a week'
//     },
//     {
//       name: 'Completionist',
//       icon: 'trophy',
//       earned: false,
//       description: 'Complete all courses'
//     }
//   ]

//   return (
//     <Grid columns="2" gap="xl" className="learning-dashboard">
//       <Flex direction="column" gap="l">
//         <Text variant="heading-strong-l">Your Courses</Text>
//         {courses.map((course, index) => (
//           <Card key={index} padding="l">
//             <Flex direction="column" gap="m">
//               <Flex justifyContent="between" alignItems="center">
//                 <Text variant="heading-strong-s">{course.name}</Text>
//                 <Badge variant="secondary">{course.color}</Badge>
//               </Flex>
//               <Progress value={course.progress} />
//               <Flex justifyContent="between">
//                 <Text variant="body-default-s" color="secondary">
//                   {course.completed}/{course.lessons} lessons
//                 </Text>
//                 <Text variant="body-default-s" color="secondary">
//                   {course.progress}% complete
//                 </Text>
//               </Flex>
//               <Button variant="secondary" size="s">
//                 Continue Learning
//               </Button>
//             </Flex>
//           </Card>
//         ))}
//       </Flex>

//       <Flex direction="column" gap="l">
//         <Text variant="heading-strong-l">Achievements</Text>
//         <Grid columns="1" gap="m">
//           {achievements.map((achievement, index) => (
//             <Card
//               key={index}
//               padding="m"
//               className={achievement.earned ? 'earned' : 'locked'}
//             >
//               <Flex alignItems="center" gap="m">
//                 <Icon name={achievement.icon} size="l" />
//                 <Flex direction="column" gap="xs">
//                   <Text variant="body-strong-m">{achievement.name}</Text>
//                   <Text variant="body-default-s" color="secondary">
//                     {achievement.description}
//                   </Text>
//                   {achievement.earned && (
//                     <Badge variant="success" size="s">
//                       Earned!
//                     </Badge>
//                   )}
//                 </Flex>
//               </Flex>
//             </Card>
//           ))}
//         </Grid>
//       </Flex>
//     </Grid>
//   )
// }

// // Example 3: Team Section with Cards
// export function TeamSectionExample() {
//   const teamMembers = [
//     {
//       name: 'Sarah Johnson',
//       role: 'CEO & Founder',
//       image: '/images/avatar.jpg',
//       bio: 'Visionary leader with 15+ years in tech innovation',
//       social: { twitter: '@sarah', linkedin: '/in/sarah' }
//     },
//     {
//       name: 'Michael Chen',
//       role: 'CTO',
//       image: '/images/avatar.jpg',
//       bio: 'Full-stack architect passionate about scalable solutions',
//       social: { twitter: '@michael', linkedin: '/in/michael' }
//     },
//     {
//       name: 'Emily Rodriguez',
//       role: 'Head of Design',
//       image: '/images/avatar.jpg',
//       bio: 'Creative director focused on user-centered design',
//       social: { twitter: '@emily', linkedin: '/in/emily' }
//     },
//     {
//       name: 'David Kim',
//       role: 'Lead Developer',
//       image: '/images/avatar.jpg',
//       bio: 'Senior engineer specializing in modern web technologies',
//       social: { twitter: '@david', linkedin: '/in/david' }
//     }
//   ]

//   return (
//     <Flex direction="column" gap="xl" className="team-section">
//       <Flex direction="column" gap="m" alignItems="center" textAlign="center">
//         <Text variant="display-strong-s">Meet Our Team</Text>
//         <Text
//           variant="body-default-l"
//           color="secondary"
//           style={{ maxWidth: '600px' }}
//         >
//           We're a passionate group of professionals dedicated to creating
//           exceptional digital experiences.
//         </Text>
//       </Flex>

//       <Grid columns="4" gap="l">
//         {teamMembers.map((member, index) => (
//           <Card key={index} padding="l">
//             <Flex
//               direction="column"
//               alignItems="center"
//               gap="m"
//               textAlign="center"
//             >
//               <Avatar src={member.image} size="xl" />
//               <Flex direction="column" gap="xs">
//                 <Text variant="heading-strong-s">{member.name}</Text>
//                 <Text variant="body-default-s" color="secondary">
//                   {member.role}
//                 </Text>
//               </Flex>
//               <Text variant="body-default-xs" color="secondary">
//                 {member.bio}
//               </Text>
//               <Flex gap="s">
//                 <Button variant="tertiary" size="s">
//                   <Icon name="twitter" size="s" />
//                 </Button>
//                 <Button variant="tertiary" size="s">
//                   <Icon name="linkedin" size="s" />
//                 </Button>
//               </Flex>
//             </Flex>
//           </Card>
//         ))}
//       </Grid>
//     </Flex>
//   )
// }

// // Example 4: Sales Dashboard with KPIs
// export function SalesDashboardExample() {
//   const kpis = [
//     {
//       label: 'Total Revenue',
//       value: '$125,430',
//       change: '+12.5%',
//       trend: 'up'
//     },
//     { label: 'Orders', value: '1,247', change: '+8.2%', trend: 'up' },
//     { label: 'Avg Order', value: '$98.50', change: '-2.1%', trend: 'down' },
//     { label: 'Conversion', value: '3.2%', change: '+0.5%', trend: 'up' }
//   ]

//   const topProducts = [
//     { name: 'Premium Plan', sales: '$45,230', growth: '+15%' },
//     { name: 'Starter Kit', sales: '$32,100', growth: '+8%' },
//     { name: 'Enterprise', sales: '$28,900', growth: '+22%' },
//     { name: 'Add-ons', sales: '$19,200', growth: '+5%' }
//   ]

//   return (
//     <Flex direction="column" gap="xl" className="sales-dashboard">
//       <Text variant="display-strong-s">Sales Analytics</Text>

//       <Grid columns="4" gap="l">
//         {kpis.map((kpi, index) => (
//           <Card key={index} padding="l">
//             <Flex direction="column" gap="s">
//               <Text variant="body-default-s" color="secondary">
//                 {kpi.label}
//               </Text>
//               <Text variant="display-strong-s">{kpi.value}</Text>
//               <Flex alignItems="center" gap="xs">
//                 <Icon
//                   name={kpi.trend === 'up' ? 'arrow-up' : 'arrow-down'}
//                   size="s"
//                 />
//                 <Text
//                   variant="body-default-s"
//                   color={kpi.trend === 'up' ? 'success' : 'danger'}
//                 >
//                   {kpi.change}
//                 </Text>
//               </Flex>
//             </Flex>
//           </Card>
//         ))}
//       </Grid>

//       <Grid columns="2" gap="l">
//         <Card padding="l">
//           <Flex direction="column" gap="m">
//             <Text variant="heading-strong-m">Revenue Trend</Text>
//             <div
//               style={{
//                 height: '300px',
//                 background: 'var(--neutral-alpha-weak)',
//                 borderRadius: 'var(--radius-s)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}
//             >
//               <Text variant="body-default-m" color="secondary">
//                 📈 Chart Visualization
//               </Text>
//             </div>
//           </Flex>
//         </Card>

//         <Card padding="l">
//           <Flex direction="column" gap="m">
//             <Text variant="heading-strong-m">Top Products</Text>
//             <Flex direction="column" gap="s">
//               {topProducts.map((product, index) => (
//                 <Flex
//                   key={index}
//                   justifyContent="between"
//                   alignItems="center"
//                   padding="s"
//                 >
//                   <Flex direction="column" gap="xs">
//                     <Text variant="body-strong-s">{product.name}</Text>
//                     <Text variant="body-default-s" color="secondary">
//                       {product.sales}
//                     </Text>
//                   </Flex>
//                   <Badge variant="success">{product.growth}</Badge>
//                 </Flex>
//               ))}
//             </Flex>
//           </Flex>
//         </Card>
//       </Grid>
//     </Flex>
//   )
// }

// // Example 5: Contact Form with Validation
// export function ContactFormExample() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     message: ''
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1000))
//     setIsSubmitting(false)
//     alert('Message sent successfully!')
//   }

//   return (
//     <Grid columns="2" gap="xl" className="contact-section">
//       <Flex direction="column" gap="l">
//         <Flex direction="column" gap="m">
//           <Text variant="display-strong-s">Get in Touch</Text>
//           <Text variant="body-default-l" color="secondary">
//             Have a question or want to work together? We'd love to hear from
//             you.
//           </Text>
//         </Flex>

//         <Flex direction="column" gap="m">
//           <Flex alignItems="center" gap="m">
//             <Icon name="mail" size="m" />
//             <Text variant="body-default-m">hello@pageforge.com</Text>
//           </Flex>
//           <Flex alignItems="center" gap="m">
//             <Icon name="phone" size="m" />
//             <Text variant="body-default-m">+1 (555) 123-4567</Text>
//           </Flex>
//           <Flex alignItems="center" gap="m">
//             <Icon name="map-pin" size="m" />
//             <Text variant="body-default-m">San Francisco, CA</Text>
//           </Flex>
//         </Flex>
//       </Flex>

//       <Card padding="l">
//         <form onSubmit={handleSubmit}>
//           <Flex direction="column" gap="m">
//             <Flex direction="column" gap="s">
//               <Text variant="label-default-s">Name *</Text>
//               <input
//                 type="text"
//                 value={formData.name}
//                 onChange={e =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//                 required
//                 style={{
//                   padding: 'var(--space-s)',
//                   border: '1px solid var(--neutral-border-medium)',
//                   borderRadius: 'var(--radius-s)',
//                   fontSize: 'var(--font-size-s)'
//                 }}
//               />
//             </Flex>

//             <Flex direction="column" gap="s">
//               <Text variant="label-default-s">Email *</Text>
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={e =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 required
//                 style={{
//                   padding: 'var(--space-s)',
//                   border: '1px solid var(--neutral-border-medium)',
//                   borderRadius: 'var(--radius-s)',
//                   fontSize: 'var(--font-size-s)'
//                 }}
//               />
//             </Flex>

//             <Flex direction="column" gap="s">
//               <Text variant="label-default-s">Company</Text>
//               <input
//                 type="text"
//                 value={formData.company}
//                 onChange={e =>
//                   setFormData({ ...formData, company: e.target.value })
//                 }
//                 style={{
//                   padding: 'var(--space-s)',
//                   border: '1px solid var(--neutral-border-medium)',
//                   borderRadius: 'var(--radius-s)',
//                   fontSize: 'var(--font-size-s)'
//                 }}
//               />
//             </Flex>

//             <Flex direction="column" gap="s">
//               <Text variant="label-default-s">Message *</Text>
//               <textarea
//                 value={formData.message}
//                 onChange={e =>
//                   setFormData({ ...formData, message: e.target.value })
//                 }
//                 required
//                 rows={4}
//                 style={{
//                   padding: 'var(--space-s)',
//                   border: '1px solid var(--neutral-border-medium)',
//                   borderRadius: 'var(--radius-s)',
//                   fontSize: 'var(--font-size-s)',
//                   resize: 'vertical'
//                 }}
//               />
//             </Flex>

//             <Button
//               type="submit"
//               variant="primary"
//               size="m"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Sending...' : 'Send Message'}
//             </Button>
//           </Flex>
//         </form>
//       </Card>
//     </Grid>
//   )
// }

// // Main Example Showcase Component
// export default function ExampleSections() {
//   const [activeExample, setActiveExample] = useState('pricing')

//   const examples = [
//     {
//       id: 'pricing',
//       name: 'Pricing Calculator',
//       component: PricingCalculatorExample
//     },
//     {
//       id: 'dashboard',
//       name: 'Learning Dashboard',
//       component: LearningDashboardExample
//     },
//     { id: 'team', name: 'Team Section', component: TeamSectionExample },
//     { id: 'sales', name: 'Sales Dashboard', component: SalesDashboardExample },
//     { id: 'contact', name: 'Contact Form', component: ContactFormExample }
//   ]

//   const ActiveComponent =
//     examples.find(ex => ex.id === activeExample)?.component ||
//     PricingCalculatorExample

//   return (
//     <Flex direction="column" gap="xl" className="example-sections">
//       <Flex direction="column" gap="m" alignItems="center" textAlign="center">
//         <Text variant="display-strong-l">AI-Generated Section Examples</Text>
//         <Text
//           variant="body-default-l"
//           color="secondary"
//           style={{ maxWidth: '800px' }}
//         >
//           These are real examples generated by our AI system. Each section is
//           created from natural language input and produces production-ready
//           React components.
//         </Text>
//       </Flex>

//       <Flex gap="s" vertical="center" wrap>
//         {examples.map(example => (
//           <Button
//             key={example.id}
//             variant={activeExample === example.id ? 'primary' : 'secondary'}
//             size="s"
//             onClick={() => setActiveExample(example.id)}
//           >
//             {example.name}
//           </Button>
//         ))}
//       </Flex>

//       <Card padding="xl">
//         <ActiveComponent />
//       </Card>

//       <Flex direction="column" gap="m" alignItems="center" textAlign="center">
//         <Text variant="heading-strong-m">Try It Yourself</Text>
//         <Text variant="body-default-m" color="secondary">
//           Visit <code>/ai-demo</code> to generate your own custom sections with
//           natural language.
//         </Text>
//         <Button variant="primary" size="m">
//           Open AI Demo
//         </Button>
//       </Flex>
//     </Flex>
//   )
// }
