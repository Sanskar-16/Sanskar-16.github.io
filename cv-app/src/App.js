import React from 'react';
import './App.css';
import Header from './components/Header';
import PersonalProfile from './components/PersonalProfile';
import Education from './components/Education';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import PositionsOfResponsibility from './components/PositionsOfResponsibility';
import VolunteeringExperience from './components/VolunteeringExperience';
import Skills from './components/Skills';
import Interests from './components/Interests';
// Import jsPDF for PDF generation
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function App() {
  // CV Data - This will be populated from your README.md
  const cvData = {
    personalInfo: {
      name: "Sanskar Gupta",
      phone: "(+44) 07459440712 / (+91) 9920068513",
      email: "sanskargupta15@gmail.com",
      linkedin: "https://www.linkedin.com/in/sanskargupta/",
      github: "https://github.com/Sanskar-16",
      kaggle: "https://www.kaggle.com/sanskar16",
      twitter: "https://twitter.com/Sanskar1531",
    },
    personalProfile: `I am a BSc Data Science graduate. I have worked on lots of volunteering projects and various jobs throughout my studies at the university, as a result of which I have excellent public skills and good communication. I also speak three languages and have extensive programming knowledge and technical background, which I enjoy using for personal projects related to various topics across the field of Data science.

I am currently employed as a google cloud consultant where I am preparing for the Associate Cloud Engineer certification.

In my spare time, I work on #66DaysofData alongside my role and I post about it on Twitter, do check that out here`, // Twitter link will be part of the header or a specific link component
    education: [
      {
        degree: "BSc Data Science",
        university: "University of Essex",
        years: "2019 - 2023",
        modules: [
          "Introduction to programming", "Introduction to databases", "Calculus", "Discrete Mathematics", "Statistics I", "Team project Challenge (Kaggle housing project)(Machine Learning)", "Object-oriented programming",
          "Artificial Intelligence", "Databases and Information retrieval", "Complex numbers and Matrices", "Statistics II", "Team project challenge (Covid-19 prediction using various regression techniques)", "Math career and employability", "Data structure and algorithms", "Optimisation (Linear programming)", "Survival analysis",
          "Natural language engineering(NLP)", "Capstone Project (Opinion forming using Graph theory)", "Modelling Experimental Data", "Applied Statistics", "Information Retrieval", "Data Visualisation", "Math career and employability."
        ],
        grade: "1st (Overall Grade - 1st)"
      },
      {
        degree: "A-levels or equivalent",
        university: "Delhi Public School",
        years: "2017 - 2019",
        modules: ["Computer Science", "Physics", "Maths", "Chemistry", "English", "Physical Education"],
        grade: "89% (A)"
      }
    ],
    projects: [
      { name: "Capstone Project - Dissertaion", link: "https://github.com/Sanskar-16/capstone" },
      { name: "Natural Language Engineering", link: "https://github.com/Sanskar-16/NLE-assignment" },
      { name: "Twitter data/sentiment analysis", link: "https://github.com/Sanskar-16/twitter" },
      { name: "Sotify data analysis", link: "https://github.com/Sanskar-16/spotify" },
      { name: "F1 data analysis", link: "https://github.com/Sanskar-16/f1" },
      {
        name: "A COVID-19 modelling and forecast tool",
        link: "https://github.com/Sanskar-16/covid-project",
        description: "This project was a part of the module CE291 Team project challenge in my second year. The requirements were to create a modelling and forecasting tool using data available online. We used Piecewise linear regression algorithm to predict the graph. We have also included a colour-coded map, which shows the number of cases in a region based on colours. Another feature that our product entails is the country comparison tab which as the name suggests compares two countries and shows various metrics for their data.",
        languages: "Java, HTML, Python."
      },
      {
        name: "House Prices - Advanced Regression Techniques",
        link: "https://github.com/Sanskar-16/house-price-new",
        description: "This project was based on a prediction of the housing prices using feature engineering, RFs and gradient boosting. The attributes which define the price in a certain way were given, One had to get the right attributes together and remove the ones which alter the price in an undesirable way to predict the prices in the most accurate manner. I did this project with a team of six other members, We all achieved a score of 0.16164 (RMSE) as the best score. RMSE also knows as Root mean square error is the deviation of the residuals, Residuals are a measure of how far from the regression line data points are. We initially based our predictions on random forest which is a simple yet diverse machine learning algorithm. Moving forward we realised XGBoost produced better results for us. XGBoost is an implementation of gradient boosted decision trees designed for speed and performance.",
        languages: "python (pandas, seaborn, matplotlib, NumPy, scipy, sklearn)",
        algorithms: "random forest, XGBoost."
      },
      {
        name: "Titanic - ML from disaster",
        link: "https://github.com/Sanskar-16/titanic",
        description: "I started this project to gain basic insights into ML and how kaggle works. I achieved a score of 0.775 compared to the best score of 1. The competition uses machine learning to create a model that predicts which passengers survived the Titanic shipwreck. I do plan on improving my score once I learn more algorithms and have a better understanding of the dataset.",
        languages: "Python (pandas, NumPy)"
      }
    ],
    workExperience: [
      { role: "Google cloud consultant", company: "Go Reply", dates: "September 2022 - Current", responsibilities: [] },
      { role: "Chef", company: "Ask Italian", dates: "Nov 2021 - August 2022", responsibilities: ["Create and present quality food in accordance with company specs."] },
      {
        role: "Student Ambassador", company: "University of Essex", dates: "October 2021 - July 2022",
        responsibilities: [
          "Part of the Communications and External Relations Team.",
          "Predominately undertaking duties for the Outreach and Marketing and Student Recruitment teams.",
          "Supporting the above-mentioned teams by providing a current student’s perspective and general assistance at the University’s Outreach and Marketing and Student Recruitment teams.",
          "At key points throughout the year, supporting other teams across the University on approved, Student Ambassador related activities.",
          "Outreach events involve working with young people aged 11-18 years and also work specifically with groups of people under-represented at universities, including mature students, students with disabilities and care leavers. At such events, providing positive role models in Higher Education and being committed to the objectives of widening access.",
          "Working with post-16 students at on-campus events such as pre-application Open Days, Applicant Days and Campus Tours for Marketing and Student Recruitment events.",
          "Student Ambassadors also importantly work with the parents/guardians of young people and applicants. They may have the opportunity for office-based experience."
        ]
      },
      {
        role: "Resident’s Assistant", company: "University of Essex", dates: "October 2020 – June 2021",
        responsibilities: [
          "Creating a sense of community through social opportunities and befriending.",
          "Using admin and organisational skills for facilitating flat agreements",
          "Problem solving and dialogue within student accommodation using negotiation and listening skills.",
          "Building inclusive residential and campus-wide communities and assist in the creation of an environment in which students not only live and learn but also grow.",
          "Creative thinking to come up with programs with social values for residents, promoting and running those events.",
          "Mental health awareness."
        ]
      },
      {
        role: "Support Worker", company: "Lifeways – Living Ambitions", dates: "February 2020 – October 2020",
        responsibilities: [
          "Working as a support worker by helping the service users carry out their day-to-day tasks.",
          "Being punctual to relieve colleagues from previous shifts.",
          "Responsibly help them take their medications correctly and on time.",
          "Make food with/for them, helps me learn about different people and their interests.",
          "Working part-time as and when needed by the services I am listed under. Keeps me determined to work better and harder every day."
        ]
      },
      {
        role: "Accommodation representative", company: "University of Essex", dates: "October 2019 – July 2020",
        responsibilities: [
          "Maintain my own room to show it as a model room for visiting parents and new students.",
          "Fill in timesheets in a particular time frame to get paid for the shifts held."
        ]
      },
      {
        role: "Team Member", company: "Theobroma - Food of the Gods", dates: "May 2019 - August 2019",
        responsibilities: [
          "Worked as a Team Member to provide quality service.",
          "Coordinated with the team to deliver in the best interest of the customer.",
          "Well Experienced in waiting tables, closing shift, managing orders.",
          "Responsibly handle cash whenever needed.",
          "Converse with customers for feedback on the service provided and how can it be improved."
        ]
      }
    ],
    positionsOfResponsibility: [
      {
        role: "Vice-President – Cycling club", organization: "University of Essex", dates: "October 2020 – July 2021",
        responsibilities: [
          "Manage the internal working of the club such as and assist the president where necessary.",
          "Act as a secondary point of contact for external bodies."
        ]
      },
      {
        role: "Essex Student representative", organization: "University of Essex", dates: "December 2019 – July 2020",
        responsibilities: [
          "Student representative for mathematical Sciences department’s modules.",
          "Gather feedback from students via email, WhatsApp for different modules.",
          "Communicate efficiently with higher authorities to convey the feedback."
        ]
      }
    ],
    volunteeringExperience: [
      {
        role: "Communications Officer", organization: "University of Essex - VTeam (Animal protection project)", dates: "January 2021 – July 2022",
        responsibilities: [
          "Emailing new volunteers, welcoming them to the project.",
          "Sending weekly emails to volunteers that are “Ready to Volunteer”, telling them session times, location (Zoom meeting ID for now), etc.",
          "Changing the status of volunteers on GradIntel.",
          "Telling Session Leaders who are attending their session.",
          "Helping with session planning. Sharing completed session plan with session leaders, volunteers, and VTeam.",
          "Helping to promote the project through stalls/lectures/society socials (mostly on social media right now - Facebook pages, Instagram, etc.)",
          "Helping in creating promotional material.",
          "Ensure project descriptions are up-to-date and relevant"
        ]
      },
      {
        role: "Session Leader", organization: "University of Essex - VTeam (Animal protection project)", dates: "October 2019 – January 2021",
        responsibilities: [
          "Working as a session leader for the animal protection project on alternate weekends.",
          "Take attendance on volunteers’ arrival and make sure everyone reaches safely.",
          "Working as a volunteer on other on and off projects and regular projects."
        ]
      },
      {
        role: "Volunteer", organization: "University of Essex – Nightline", dates: "October 2019 - Jul 2020",
        responsibilities: [
          "Confidential listening and support services run by the students for the students at the university.",
          "Basic first aid/bystander trained."
        ]
      },
      {
        role: "Volunteer", organization: "The Akanksha Foundation", dates: "April 2017 - June 2017",
        responsibilities: [
          "Worked as a Volunteer to align the HR activities in MS Excel during appraisals.",
          "Helped the team with Employee data and MIS.",
          "Coordination with the HR team and field Volunteer for organizing an annual day."
        ]
      }
    ],
    skills: {
      technical: [
        "Git (version control), Jira (Project management)",
        "Programming languages -> Python, MySQL, R, Java, HTML, C++.",
        "Software Experince - MATLAB, RStudio, Jetbrains softwares, Power BI, Tableau.",
        "Data Science Platform experience - Kaggle, Github,",
        "Conversant with Windows, Mac, MS office & Internet-based applications."
      ],
      languages: ["English (Fluent)", "Hindi (Fluent)", "Spanish (Beginner)"]
    },
    interests: [
      "Neural Networks, Computer Vision, Art using ML/AI, Deep Learning, Cloud computing.",
      "Participating in sports and fitness – helps me keep active and a good physique. I'm passionate about football.",
      "Listening and working with Music and beats – keeps me relaxed. I play intruments too (keyboard and drums).",
      "Cycle touring – explore nearby areas, go for long rides.",
      "Gaming – COD, Chess."
    ],
    references: "Reference available on request"
  };

  const downloadPDF = () => {
    const input = document.getElementById('cv-content');
    html2canvas(input, { scale: 2 }) // Higher scale for better quality
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        // const imgY = 0; // Start from top, add pages if needed

        let heightLeft = imgHeight * ratio;
        let position = 0; // Y position for current image segment

        // Add the first page
        pdf.addImage(imgData, 'PNG', imgX, position, imgWidth * ratio, imgHeight * ratio);
        heightLeft -= pdfHeight;


        while (heightLeft > 0) {
          position -= pdfHeight; // Move to the next segment of the image
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', imgX, position, imgWidth * ratio, imgHeight * ratio);
          heightLeft -= pdfHeight;
        }
        pdf.save("sanskar_gupta_cv.pdf");
      });
  };

  return (
    <div className="App">
      <button onClick={downloadPDF} style={{ margin: '20px', padding: '10px' }}>Download CV as PDF</button>
      <div id="cv-content">
        <Header personalInfo={cvData.personalInfo} />
        <PersonalProfile profile={cvData.personalProfile} />
        <Education education={cvData.education} />
        <Projects projects={cvData.projects} />
        <WorkExperience experience={cvData.workExperience} />
        <PositionsOfResponsibility positions={cvData.positionsOfResponsibility} />
        <VolunteeringExperience volunteering={cvData.volunteeringExperience} />
        <Skills skills={cvData.skills} />
        <Interests interests={cvData.interests} />
        <section>
          <h2>References</h2>
          <p>{cvData.references}</p>
        </section>
      </div>
    </div>
  );
}

export default App;
