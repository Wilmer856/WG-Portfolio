import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 1,
    title: 'Spendo - Personal Expense Tracker',
    category: 'Web Development',
    thumbnailUrl: '/images/works/spendo.png',
    description: `Spendo is a personal finance tracking web application designed to help users manage their expenses, track spending habits, and generate insightful reports.`,
    publishedAt: '01 July 2022',
    images: ['/images/works/spendo-dashboard.png', '/images/works/spendo-add.png', '/images/works/spendo-reports-1.png', '/images/works/spendo-reports-2.png', '/images/works/spendo-transactions.png', '/images/works/spendo-profile.png'],
    previewUrl: '',
    featureList: [
      'User authentication with secure login and registration',
      'Dashboard displaying total balance, income, and expenses',
      'Add, edit, and delete transactions with detailed descriptions',
      'Category-based transaction filtering',
      'Monthly spending trend analysis',
      'Graphical reports including expenses by category and income vs expenses',
      'Downloadable financial reports in ZIP format',
      'Responsive and mobile-friendly design',
      'CSV export for transactions',
      'Seamless pagination for transaction history',
      'Dark mode support for better user experience',
      'Bootstrap-powered UI for clean and modern layout'
    ],
    attributes: [
      {
        name: 'Client',
        value: 'WillWebDev',
      },
      {
        name: 'Category',
        value: 'Web Development',
      },
      {
        name: 'Technologies',
        value: 'Flask, Python, PostgreSQL, Bootstrap, Seaborn, Matplotlib, Pandas',
      }
    ],
  },

  {
    id: 2,
    title: 'Countries of the World',
    category: 'Web Development',
    thumbnailUrl: '/images/works/where-in-the-world.png',
    description: `Where in the World is a React-based web application that allows users to browse and explore detailed information about different countries, including population, region, capital, and neighboring nations. It also provides a dark/light mode toggle for improved accessibility and user preference.`,
    publishedAt: '01 July 2022',
    images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
    previewUrl: '',
    featureList: [
    'Search for countries in real time',
    'Filter countries by region',
    'Detailed country view with extended info (capital, languages, currencies)',
    'Navigate to neighboring countries seamlessly',
    'Dark mode and light mode toggle',
    'Responsive design for various screen sizes',
    'Clean and intuitive user interface',
    'REST Countries API integration'
    ],
    attributes: [
      {
        name: 'Client',
        value: 'WillWebDev',
      },
      {
        name: 'Category',
        value: 'Web Development',
      },
      {
        name: 'Technologies',
        value: 'React, REST Countries API, Context API, CSS',
      },
    ],
  },
  {
    id: 3,
    title: 'Animal Classification ML Model',
    category: 'AI / Machine Learning',
    thumbnailUrl: '/images/works/SafeHerd.png',
    description: `This project develops a machine learning model using Python and TensorFlow to classify animals as either domestic or predators. Leveraging AI algorithms and a training dataset of animal traits, the model provides real-time classification for educational and research purposes.`,
    publishedAt: '01 July 2022',
    images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
    previewUrl: '',
    featureList: [
      'Trained using TensorFlow & Keras for accurate domestic/predator classification',
      'Uses a curated dataset of animal traits for model training',
      'Real-time image-based inference for quick categorization',
      'Potential applications in agriculture, wildlife monitoring, or educational tools',
      'Extensible architecture for additional animal classes in the future',
      'Detailed Jupyter Notebook documenting model design and performance',
      'REST API integration for easy front-end consumption',
      'Scalable pipeline to handle additional training data'
    ],
    attributes: [
      {
        name: 'Client',
        value: 'WillWebDev',
      },
      {
        name: 'Category',
        value: 'AI / Machine Learning',
      },
      {
        name: 'Technologies',
        value: 'Python, TensorFlow, Keras, Jupyter Notebook',
      }
    ],
  },

  {
    id: 4,
    title: 'Workout Tracker (MERN Stack)',
    category: 'Web Development',
    thumbnailUrl: '/images/works/workout-buddy.png',
    description: `A dynamic web application built using the MERN stack (MongoDB, Express.js, React, Node.js) to help users log and manage workout routines. Users can easily add, view, update, and delete workout details, providing an efficient way to track and maintain fitness goals.`,
    publishedAt: '01 July 2022',
    images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
    previewUrl: '',
    featureList: [
      'Create, read, update, and delete (CRUD) workout entries',
      'User-friendly form for logging exercise name, reps, and load',
      'React-based frontend for a responsive and interactive UI',
      'Express.js and Node.js backend handling API endpoints',
      'MongoDB for flexible and scalable data storage',
      'Streamlined workflow for viewing and editing workout history',
      'Modern UI design',
      'RESTful APIs connecting frontend and backend'
    ],
    attributes: [
      {
        name: 'Client',
        value: 'WillWebDev',
      },
      {
        name: 'Category',
        value: 'Web Development',
      },
      {
        name: 'Technologies',
        value: 'React, Node.js, Express.js, MongoDB',
      }
    ],
  },

  {
    id: 5,
    title: 'Java Appointment System',
    category: 'Desktop Application',
    thumbnailUrl: '/images/works/appointment-app.png',
    description: `A JavaFX-based desktop application designed for managing appointments and customer records with multilingual support (English/French). Users can log in securely to view, create, update, and delete appointments, helping streamline scheduling and record management for businesses.`,
    publishedAt: '01 July 2022',
    images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
    previewUrl: '',
    featureList: [
      'JavaFX GUI for an intuitive desktop experience',
      'Secure login and role-based access',
      'Create, read, update, and delete (CRUD) operations for customers and appointments',
      'Multilingual interface (English and French)',
      'Integration with MySQL for data storage',
      'Responsive scheduling view with time slots and appointment details',
      'Robust error handling and form validation',
      'Efficient navigation and user-friendly layout'
    ],
    attributes: [
      {
        name: 'Client',
        value: 'WillWebDev',
      },
      {
        name: 'Category',
        value: 'Desktop Application',
      },
      {
        name: 'Technologies',
        value: 'Java, JavaFX, MySQL, IntelliJ IDEA',
      }
    ],
  },
  {
    id: 6,
    title: 'Healthcare Data Analytics Dashboard',
    category: 'Data Analytics',
    thumbnailUrl: '/images/works/Dashboard-1.png',
    description: `An interactive dashboard designed to provide insights into hospital operations, patient admissions, and treatment outcomes. Utilizing Python-based preprocessing and Tableau for visualization, it helps healthcare professionals make data-driven decisions to improve patient care and resource management.`,
    publishedAt: '01 July 2022',
    images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
    previewUrl: '',
    featureList: [
      'Dynamic Tableau dashboards for real-time filtering and analysis',
      'Line graphs tracking patient admissions over time',
      'Histograms illustrating length-of-stay patterns by medical condition',
      'Heat maps correlating medications and treatment effectiveness',
      'Resource utilization insights for efficient hospital operations',
      'Python scripts for data cleaning and ETL',
      'In-depth reporting on patient demographics and medical outcomes',
      'Responsive design for desktop and tablet viewing'
    ],
  
    attributes: [
      {
        name: 'Client',
        value: 'WillWebDev',
      },
      {
        name: 'Category',
        value: 'Data Analytics',
      },
      {
        name: 'Technologies',
        value: 'Python, Tableau, Pandas, CSV, ETL',
      }
    ],
  },
];
