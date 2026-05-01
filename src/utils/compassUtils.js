// COMPLETE list of ALL Grade 12 subjects in South Africa (no duplicates)
export const saSubjectsList = [
  "Accounting",
  "Agricultural Management Practices",
  "Agricultural Sciences",
  "Agricultural Technology",
  "Afrikaans Eerste Addisionele Taal",
  "Afrikaans Huistaal",
  "Afrikaans Tweede Addisionele Taal",
  "Business Studies",
  "Civil Technology",
  "Computer Applications Technology",
  "Consumer Studies",
  "Creative Writing",
  "Dance Studies",
  "Design",
  "Dramatic Arts",
  "Economics",
  "Electrical Technology",
  "Engineering Graphics and Design",
  "English First Additional Language",
  "English Home Language",
  "English Second Additional Language",
  "French First Additional Language",
  "French Home Language",
  "Geography",
  "German Home Language",
  "German First Additional Language",
  "History",
  "Hospitality Studies",
  "Information Technology",
  "IsiNdebele Home Language",
  "IsiNdebele First Additional Language",
  "IsiXhosa Home Language",
  "IsiXhosa First Additional Language",
  "IsiZulu Home Language",
  "IsiZulu First Additional Language",
  "Life Sciences",
  "Life Orientation",
  "Literary Studies",
  "Marine Sciences",
  "Mathematical Literacy",
  "Mathematics",
  "Mechanical Technology",
  "Music",
  "Physical Sciences",
  "Religion Studies",
  "Sepedi Home Language",
  "Sepedi First Additional Language",
  "Sesotho Home Language",
  "Sesotho First Additional Language",
  "Setswana Home Language",
  "Setswana First Additional Language",
  "Siswati Home Language",
  "Siswati First Additional Language",
  "South African Sign Language Home Language",
  "Spanish Home Language",
  "Spanish First Additional Language",
  "Sport and Exercise Science",
  "Technical Mathematics",
  "Technical Sciences",
  "Tourism",
  "Tshivenda Home Language",
  "Tshivenda First Additional Language",
  "Turkish Home Language",
  "Turkish First Additional Language",
  "Visual Arts",
  "Xitsonga Home Language",
  "Xitsonga First Additional Language"
];

// ALL public universities in South Africa (no duplicates)
export const publicUniversities = [
  "Cape Peninsula University of Technology",
  "Central University of Technology",
  "Durban University of Technology",
  "Mangosuthu University of Technology",
  "Nelson Mandela University",
  "North West University",
  "Rhodes University",
  "Sefako Makgatho Health Sciences University",
  "Sol Plaatje University",
  "Stellenbosch University",
  "Tshwane University of Technology",
  "University of Cape Town",
  "University of Fort Hare",
  "University of the Free State",
  "University of Johannesburg",
  "University of KwaZulu Natal",
  "University of Limpopo",
  "University of Mpumalanga",
  "University of Pretoria",
  "University of South Africa",
  "University of the Western Cape",
  "University of the Witwatersrand",
  "University of Zululand",
  "Vaal University of Technology",
  "Walter Sisulu University"
];

// ALL private institutions in South Africa (no duplicates)
export const privateUniversities = [
  "Boston City Campus",
  "Damelin",
  "Eduvos",
  "IIE MSA",
  "IIE Varsity College",
  "Milpark Education",
  "Pearson Institute of Higher Education",
  "Regenesys Business School",
  "Richfield Graduate Institute of Technology",
  "Rosebank College",
  "STADIO Higher Education",
  "The Independent Institute of Education",
  "Vega School"
];

// COMPLETE course database with full details (no dashes)
export const courseDatabase = {
  "BCom Accounting CA Stream": {
    duration: "3 to 4 years plus 3 years of practical training",
    description: "This degree prepares students for the Chartered Accountant designation. It covers financial accounting, management accounting, taxation, auditing, and corporate governance. Students must complete a postgraduate diploma or honours before writing the SAICA board examinations.",
    careers: "Chartered Accountant, Financial Manager, Auditor, Tax Consultant, Forensic Accountant, Chief Financial Officer, Investment Analyst"
  },
  "BAcc Chartered Accountant": {
    duration: "3 to 4 years plus 3 years of practical training",
    description: "A specialised accounting degree designed specifically for the CA route. Includes comprehensive training in accounting principles, financial reporting, auditing, taxation, and business strategy.",
    careers: "Chartered Accountant, Audit Partner, Financial Director, Tax Specialist, Management Consultant, Chief Financial Officer"
  },
  "BCom General Accounting": {
    duration: "3 years",
    description: "A broad accounting degree covering financial accounting, management accounting, taxation, and business law. Graduates can pursue various professional designations including SAIPA, CIMA, or ACCA.",
    careers: "Accountant, Bookkeeper, Tax Practitioner, Financial Accountant, Payroll Manager, Credit Controller"
  },
  "Diploma in Accounting": {
    duration: "3 years",
    description: "A practical accounting qualification focused on technical accounting skills. Graduates can work as accounting technicians or pursue further professional qualifications like SAIPA.",
    careers: "Accounting Clerk, Bookkeeper, Payroll Administrator, Accounts Assistant, Tax Assistant"
  },
  "BSc Engineering": {
    duration: "4 years",
    description: "A professional engineering degree covering mathematics, physics, and engineering principles. Students specialize in civil, mechanical, electrical, chemical, or industrial engineering.",
    careers: "Professional Engineer, Project Manager, Consulting Engineer, Design Engineer, Production Manager"
  },
  "BEng Industrial Engineering": {
    duration: "4 years",
    description: "Focuses on optimizing complex systems, processes, and organizations. Combines engineering with business and management principles to improve efficiency and productivity.",
    careers: "Industrial Engineer, Operations Manager, Supply Chain Manager, Process Improvement Specialist, Logistics Manager"
  },
  "BEng Civil Engineering": {
    duration: "4 years",
    description: "Deals with the design, construction, and maintenance of infrastructure including roads, bridges, dams, buildings, and water systems.",
    careers: "Civil Engineer, Structural Engineer, Construction Manager, Municipal Engineer, Water Resources Engineer"
  },
  "BEng Mechanical Engineering": {
    duration: "4 years",
    description: "Focuses on the design, manufacturing, and maintenance of mechanical systems including engines, machines, and tools.",
    careers: "Mechanical Engineer, Maintenance Engineer, Automotive Engineer, Aerospace Engineer, Manufacturing Manager"
  },
  "BEng Electrical Engineering": {
    duration: "4 years",
    description: "Deals with the study and application of electricity, electronics, and electromagnetism. Includes power systems, control systems, and telecommunications.",
    careers: "Electrical Engineer, Power Systems Engineer, Electronics Engineer, Telecommunications Engineer, Control Systems Engineer"
  },
  "Diploma in Engineering": {
    duration: "3 years",
    description: "A practical engineering qualification focusing on hands on technical skills. Graduates work as engineering technologists or technicians.",
    careers: "Engineering Technician, Plant Technician, Maintenance Supervisor, Quality Control Inspector, Technical Draughtsperson"
  },
  "Extended Programme in Engineering": {
    duration: "4 years",
    description: "A foundation programme that includes an extra year of foundational mathematics and physics for students who need additional preparation before mainstream engineering studies.",
    careers: "Same as Diploma in Engineering, with pathway to degree programmes"
  },
  "Bachelor of Health Sciences": {
    duration: "3 to 4 years",
    description: "A broad degree covering human biology, public health, health policy, and healthcare management. Prepares students for various health related careers.",
    careers: "Public Health Officer, Health Administrator, Clinical Researcher, Health Policy Analyst, Community Health Worker"
  },
  "BSc Medical Biosciences": {
    duration: "3 to 4 years",
    description: "Focuses on the biological sciences underlying human health and disease including anatomy, physiology, pharmacology, and molecular biology.",
    careers: "Medical Researcher, Laboratory Scientist, Pharmaceutical Sales, Clinical Research Coordinator, Biotechnology Specialist"
  },
  "Medicine MBChB": {
    duration: "6 years plus 2 years community service",
    description: "A professional medical degree that trains students to become medical doctors. Includes theoretical study and clinical rotations in various specialties.",
    careers: "Medical Doctor, General Practitioner, Specialist Surgeon, Paediatrician, Physician, Public Health Doctor"
  },
  "BSc in Health Sciences": {
    duration: "3 to 4 years",
    description: "A science based health degree covering human biology, nutrition, epidemiology, and health promotion.",
    careers: "Health Promoter, Community Health Worker, Research Assistant, Health Educator, Nutrition Advisor"
  },
  "Diploma in Biomedical Technology": {
    duration: "3 years",
    description: "A practical qualification focusing on medical laboratory techniques including hematology, histology, and clinical pathology.",
    careers: "Biomedical Technologist, Medical Laboratory Technician, Pathology Assistant, Blood Transfusion Technologist"
  },
  "BCom Economics": {
    duration: "3 years",
    description: "Studies how societies allocate resources including microeconomics, macroeconomics, econometrics, and economic policy analysis.",
    careers: "Economist, Policy Analyst, Financial Analyst, Economic Researcher, Banking Professional, Investment Analyst"
  },
  "BCom Business Management": {
    duration: "3 years",
    description: "Covers business operations including marketing, human resources, operations, strategy, and organizational behaviour.",
    careers: "Business Manager, Marketing Manager, Operations Manager, Human Resources Manager, Entrepreneur, Business Consultant"
  },
  "BCom Marketing": {
    duration: "3 years",
    description: "Focuses on consumer behaviour, market research, brand management, digital marketing, and advertising strategies.",
    careers: "Marketing Manager, Brand Manager, Digital Marketer, Advertising Executive, Market Researcher, Social Media Manager"
  },
  "BCom Human Resources": {
    duration: "3 years",
    description: "Covers recruitment, talent management, employee relations, labour law, training and development, and organisational psychology.",
    careers: "Human Resources Manager, Recruitment Specialist, Training Coordinator, Labour Relations Officer, Organisational Development Specialist"
  },
  "Higher Certificate in Business": {
    duration: "1 year",
    description: "A foundational business qualification that introduces basic business concepts including management, marketing, and communication.",
    careers: "Junior Administrator, Sales Assistant, Customer Service Representative, Office Assistant, Receptionist"
  },
  "Diploma in Business Management": {
    duration: "3 years",
    description: "A practical business qualification covering management principles, business law, economics, and entrepreneurship.",
    careers: "Business Administrator, Office Manager, Small Business Owner, Team Leader, Department Supervisor"
  },
  "LLB Bachelor of Laws": {
    duration: "4 years",
    description: "A professional law degree that prepares students for legal practice including criminal law, contract law, constitutional law, and civil procedure.",
    careers: "Attorney, Advocate, Legal Advisor, Corporate Counsel, Magistrate, Judge, Legal Researcher"
  },
  "BA Law": {
    duration: "3 years plus 2 years for LLB",
    description: "A combined arts and law degree that can be followed by a two year LLB. Includes legal theory combined with humanities subjects.",
    careers: "Legal Advisor, Compliance Officer, Legal Researcher, Policy Analyst, Paralegal"
  },
  "LLB Extended Programme": {
    duration: "5 years",
    description: "A foundation law degree with an additional year of academic support for students who need extra preparation before mainstream law studies.",
    careers: "Same as LLB, with pathway to legal profession"
  },
  "Diploma in Law": {
    duration: "3 years",
    description: "A practical legal qualification for paralegals and legal assistants covering basic legal principles and procedures.",
    careers: "Paralegal, Legal Secretary, Court Clerk, Legal Assistant, Compliance Assistant"
  },
  "BSc Computer Science": {
    duration: "3 to 4 years",
    description: "Focuses on programming, algorithms, data structures, software development, artificial intelligence, and computer systems.",
    careers: "Software Developer, Systems Analyst, Data Scientist, AI Engineer, Cybersecurity Specialist, Database Administrator"
  },
  "BSc Information Technology": {
    duration: "3 to 4 years",
    description: "Covers network design, database management, systems analysis, IT project management, and technical support.",
    careers: "IT Manager, Network Administrator, Database Administrator, Systems Architect, IT Consultant"
  },
  "BEng Computer Engineering": {
    duration: "4 years",
    description: "Combines electrical engineering and computer science, focusing on hardware software integration and embedded systems.",
    careers: "Computer Engineer, Embedded Systems Engineer, Hardware Designer, Robotics Engineer, Firmware Engineer"
  },
  "Diploma in Information Technology": {
    duration: "3 years",
    description: "A practical IT qualification covering programming fundamentals, networking, database management, and technical support.",
    careers: "IT Technician, Help Desk Support, Junior Developer, Network Assistant, Technical Support Specialist"
  },
  "BCom Informatics": {
    duration: "3 years",
    description: "Combines business management with information systems, focusing on how technology solves business problems.",
    careers: "Business Analyst, Systems Analyst, IT Consultant, Project Manager, Data Analyst"
  },
  "Higher Certificate in IT": {
    duration: "1 year",
    description: "A foundational IT qualification covering basic computer literacy, introductory programming, and office applications.",
    careers: "IT Support Assistant, Data Capturer, Junior Help Desk Operator, Computer Operator"
  },
  "Higher Certificate": {
    duration: "1 year",
    description: "A foundational qualification that provides entry level knowledge in a specific field and can lead to diploma or degree studies.",
    careers: "Entry level positions in chosen field of study"
  },
  "Foundation Programme": {
    duration: "1 year",
    description: "An academic preparation programme that strengthens foundational knowledge in mathematics, language, and study skills for university access.",
    careers: "Pathway to degree studies. Opens access to higher education."
  },
  "Occupational Certificate": {
    duration: "1 to 3 years as a learnership",
    description: "A workplace based qualification that combines theoretical learning with practical on the job training in a specific occupation.",
    careers: "Skilled trade or technical position in specific occupation"
  },
  "National Certificate Vocational Level 4": {
    duration: "3 years from Level 2 to Level 4",
    description: "National Certificate Vocational offered at TVET colleges. Provides vocational training in specific sectors like finance, engineering, or information technology.",
    careers: "Entry level positions in chosen vocational field or pathway to higher education"
  }
};

// Get level based on percentage using South African grading system
export function getLevel(percent) {
  const pct = parseFloat(percent);
  if (isNaN(pct)) return 0;
  if (pct >= 80) return 7;
  if (pct >= 70) return 6;
  if (pct >= 60) return 5;
  if (pct >= 50) return 4;
  if (pct >= 40) return 3;
  if (pct >= 30) return 2;
  return 1;
}

// Get university official website URL
export function getUniversityWebsite(uniName) {
  const websiteMap = {
    "University of Cape Town": "https://www.uct.ac.za",
    "University of the Witwatersrand": "https://www.wits.ac.za",
    "Stellenbosch University": "https://www.sun.ac.za",
    "University of Johannesburg": "https://www.uj.ac.za",
    "University of Pretoria": "https://www.up.ac.za",
    "University of KwaZulu Natal": "https://www.ukzn.ac.za",
    "University of the Free State": "https://www.ufs.ac.za",
    "North West University": "https://www.nwu.ac.za",
    "Rhodes University": "https://www.ru.ac.za",
    "Nelson Mandela University": "https://www.mandela.ac.za",
    "University of the Western Cape": "https://www.uwc.ac.za",
    "University of South Africa": "https://www.unisa.ac.za",
    "Cape Peninsula University of Technology": "https://www.cput.ac.za",
    "Tshwane University of Technology": "https://www.tut.ac.za",
    "Durban University of Technology": "https://www.dut.ac.za",
    "Vaal University of Technology": "https://www.vut.ac.za",
    "Central University of Technology": "https://www.cut.ac.za",
    "Mangosuthu University of Technology": "https://www.mut.ac.za",
    "University of Limpopo": "https://www.ul.ac.za",
    "University of Fort Hare": "https://www.ufh.ac.za",
    "Walter Sisulu University": "https://www.wsu.ac.za",
    "University of Zululand": "https://www.unizulu.ac.za",
    "Sefako Makgatho Health Sciences University": "https://www.smu.ac.za",
    "Sol Plaatje University": "https://www.spu.ac.za",
    "University of Mpumalanga": "https://www.ump.ac.za",
    "Boston City Campus": "https://www.boston.co.za",
    "Damelin": "https://www.damelin.co.za",
    "Eduvos": "https://www.eduvos.com",
    "IIE Varsity College": "https://www.varsitycollege.co.za",
    "STADIO Higher Education": "https://www.stadio.ac.za",
    "Richfield Graduate Institute of Technology": "https://www.richfield.ac.za",
    "Rosebank College": "https://www.rosebankcollege.co.za",
    "Regenesys Business School": "https://www.regenesys.co.za",
    "Milpark Education": "https://www.milpark.ac.za",
    "Vega School": "https://www.vegaschool.com",
    "IIE MSA": "https://www.msa.ac.za",
    "Pearson Institute of Higher Education": "https://www.pearsoninstitute.ac.za",
    "The Independent Institute of Education": "https://www.iie.ac.za",
    "TVET College public": "https://www.tvetcolleges.co.za"
  };
  
  if (websiteMap[uniName]) {
    return websiteMap[uniName];
  }
  
  for (const [key, url] of Object.entries(websiteMap)) {
    if (uniName.includes(key) || key.includes(uniName)) {
      return url;
    }
  }
  
  return null;
}

// Helper function to get all universities combined
function getAllUniversities() {
  return [...publicUniversities, ...privateUniversities];
}

// Get course details with full information
export function getCourseDetails(courseName) {
  if (courseDatabase[courseName]) {
    return courseDatabase[courseName];
  }
  
  for (const [key, value] of Object.entries(courseDatabase)) {
    if (courseName.includes(key) || key.includes(courseName)) {
      return value;
    }
  }
  
  return {
    duration: "Contact the university directly for duration information",
    description: "Please contact the university directly for detailed course information. Admission requirements vary by institution.",
    careers: "Career opportunities vary based on specialization and institution"
  };
}

// Main eligibility determination function
export function determineEligibility(subjects) {
  let aps = 0;
  let mathLevel = 0;
  let mathLitLevel = 0;
  let englishLevel = 0;
  let accountingLevel = 0;
  let physicalLevel = 0;
  let lifeSciLevel = 0;

  for (const s of subjects) {
    const lvl = getLevel(s.percent);
    aps += lvl;
    const sub = s.name.toLowerCase();

    if (sub.includes('mathematics') && !sub.includes('literacy')) mathLevel = lvl;
    if (sub.includes('mathematical literacy')) mathLitLevel = lvl;
    if (sub.includes('english')) englishLevel = lvl;
    if (sub.includes('account')) accountingLevel = lvl;
    if (sub.includes('physical')) physicalLevel = lvl;
    if (sub.includes('life sciences')) lifeSciLevel = lvl;
  }

  const matchedUniversities = new Set();
  const matchedCourses = new Set();

  // Accounting and Finance pathways
  if (mathLevel >= 4 && englishLevel >= 4 && accountingLevel >= 4 && aps >= 28) {
    const accountingUnis = [
      "University of Cape Town",
      "University of the Witwatersrand",
      "Stellenbosch University",
      "University of Johannesburg",
      "University of KwaZulu Natal",
      "University of Pretoria",
      "University of the Free State",
      "North West University",
      "Rhodes University",
      "Nelson Mandela University"
    ];
    accountingUnis.forEach(u => matchedUniversities.add(u));
    matchedCourses.add("BCom Accounting CA Stream");
    matchedCourses.add("BAcc Chartered Accountant");
  } else if (mathLevel >= 3 && englishLevel >= 4 && aps >= 26) {
    const generalAccountingUnis = [
      "University of the Western Cape",
      "University of Limpopo",
      "Nelson Mandela University",
      "Walter Sisulu University",
      "University of Fort Hare"
    ];
    generalAccountingUnis.forEach(u => matchedUniversities.add(u));
    matchedCourses.add("BCom General Accounting");
    matchedCourses.add("Diploma in Accounting");
  }

  // Engineering pathways
  if (mathLevel >= 5 && physicalLevel >= 4 && aps >= 32) {
    const engineeringUnis = [
      "University of Cape Town",
      "Stellenbosch University",
      "University of Pretoria",
      "University of the Witwatersrand",
      "University of KwaZulu Natal",
      "University of Johannesburg",
      "Cape Peninsula University of Technology",
      "Tshwane University of Technology",
      "Durban University of Technology",
      "Central University of Technology",
      "Nelson Mandela University",
      "North West University"
    ];
    engineeringUnis.forEach(u => matchedUniversities.add(u));
    matchedCourses.add("BSc Engineering");
    matchedCourses.add("BEng Industrial Engineering");
    matchedCourses.add("BEng Civil Engineering");
    matchedCourses.add("BEng Mechanical Engineering");
    matchedCourses.add("BEng Electrical Engineering");
  } else if (mathLevel >= 4 && physicalLevel >= 3 && aps >= 28) {
    const engineeringTechUnis = [
      "Cape Peninsula University of Technology",
      "Tshwane University of Technology",
      "Durban University of Technology",
      "Vaal University of Technology",
      "Central University of Technology",
      "Mangosuthu University of Technology"
    ];
    engineeringTechUnis.forEach(u => matchedUniversities.add(u));
    matchedCourses.add("Diploma in Engineering");
    matchedCourses.add("Extended Programme in Engineering");
  }

  // Health Sciences pathways
  if (mathLevel >= 4 && lifeSciLevel >= 4 && englishLevel >= 4 && aps >= 30) {
    const healthUnis = [
      "University of KwaZulu Natal",
      "University of Pretoria",
      "University of the Free State",
      "University of the Witwatersrand",
      "University of Cape Town",
      "Stellenbosch University",
      "University of the Western Cape",
      "Sefako Makgatho Health Sciences University"
    ];
    healthUnis.forEach(u => matchedUniversities.add(u));
    matchedCourses.add("Bachelor of Health Sciences");
    matchedCourses.add("BSc Medical Biosciences");
    matchedCourses.add("Medicine MBChB");
  } else if (lifeSciLevel >= 4 && englishLevel >= 4 && aps >= 28) {
    const healthScienceUnis = [
      "University of the Western Cape",
      "Walter Sisulu University",
      "University of Limpopo",
      "Nelson Mandela University"
    ];
    healthScienceUnis.forEach(u => matchedUniversities.add(u));
    matchedCourses.add("BSc in Health Sciences");
    matchedCourses.add("Diploma in Biomedical Technology");
  }

  // Commerce and Business pathways
  if ((mathLevel >= 3 || mathLitLevel >= 4) && englishLevel >= 4 && aps >= 26) {
    getAllUniversities().forEach(u => matchedUniversities.add(u));
    matchedCourses.add("BCom Economics");
    matchedCourses.add("BCom Business Management");
    matchedCourses.add("BCom Marketing");
    matchedCourses.add("BCom Human Resources");
  } else if (englishLevel >= 4 && aps >= 24) {
    const businessPrivateUnis = [
      "University of South Africa",
      "Boston City Campus",
      "Damelin",
      "Eduvos",
      "Rosebank College",
      "STADIO Higher Education",
      "IIE Varsity College",
      "Richfield Graduate Institute of Technology"
    ];
    businessPrivateUnis.forEach(u => matchedUniversities.add(u));
    matchedCourses.add("Higher Certificate in Business");
    matchedCourses.add("Diploma in Business Management");
  }

  // Law pathways
  if (englishLevel >= 5 && aps >= 28) {
    const lawUnis = [
      "University of Cape Town",
      "University of the Witwatersrand",
      "University of Pretoria",
      "University of KwaZulu Natal",
      "University of Johannesburg",
      "Stellenbosch University",
      "University of the Free State",
      "Rhodes University",
      "North West University"
    ];
    lawUnis.forEach(u => matchedUniversities.add(u));
    matchedCourses.add("LLB Bachelor of Laws");
    matchedCourses.add("BA Law");
  } else if (englishLevel >= 4 && aps >= 26) {
    const lawGeneralUnis = [
      "University of the Western Cape",
      "University of Fort Hare",
      "Walter Sisulu University",
      "University of Limpopo",
      "University of Zululand",
      "Nelson Mandela University"
    ];
    lawGeneralUnis.forEach(u => matchedUniversities.add(u));
    matchedCourses.add("LLB Extended Programme");
    matchedCourses.add("Diploma in Law");
  }

  // Information Technology pathways
  if (mathLevel >= 4 && aps >= 28) {
    const itUnis = [
      "University of the Witwatersrand",
      "University of Cape Town",
      "Stellenbosch University",
      "University of Johannesburg",
      "University of Pretoria",
      "University of KwaZulu Natal",
      "University of the Free State",
      "North West University",
      "Rhodes University",
      "Nelson Mandela University"
    ];
    itUnis.forEach(u => matchedUniversities.add(u));
    matchedCourses.add("BSc Computer Science");
    matchedCourses.add("BSc Information Technology");
    matchedCourses.add("BEng Computer Engineering");
  } else if (mathLevel >= 3 && aps >= 24) {
    const itTechUnis = [
      "Cape Peninsula University of Technology",
      "Tshwane University of Technology",
      "Durban University of Technology",
      "Vaal University of Technology",
      "Central University of Technology",
      "University of South Africa",
      "STADIO Higher Education",
      "Eduvos",
      "IIE Varsity College",
      "Boston City Campus",
      "Richfield Graduate Institute of Technology"
    ];
    itTechUnis.forEach(u => matchedUniversities.add(u));
    matchedCourses.add("Diploma in Information Technology");
    matchedCourses.add("BCom Informatics");
    matchedCourses.add("Higher Certificate in IT");
  }

  // Alternative pathways for lower scores
  if (matchedUniversities.size === 0) {
    const alternativeOptions = [
      "TVET College public",
      "Boston City Campus",
      "Damelin",
      "Eduvos",
      "Rosebank College",
      "Richfield Graduate Institute of Technology",
      "STADIO Higher Education"
    ];
    alternativeOptions.forEach(u => matchedUniversities.add(u));
    matchedCourses.add("Higher Certificate");
    matchedCourses.add("Foundation Programme");
    matchedCourses.add("Occupational Certificate");
    matchedCourses.add("National Certificate Vocational Level 4");
  }

  // Add private institutions for good APS scores
  if (aps >= 24) {
    privateUniversities.forEach(u => matchedUniversities.add(u));
  }

  // Convert Set to sorted array without duplicates
  const sortedUniversities = [...matchedUniversities].sort();
  const sortedCourses = [...matchedCourses].sort();

  return {
    unis: sortedUniversities,
    courses: sortedCourses,
    aps: aps,
    mathLevel: mathLevel,
    englishLevel: englishLevel
  };
}