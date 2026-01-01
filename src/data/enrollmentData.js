/**
 * NIELIT SDUY Student Enrollment Data
 * Auto-generated from: phase CSV files (preferred) or SDUY MPR November 2025 revised 09-12-2025.xlsx (fallback)
 * Generated on: 2025-12-31T20:03:44.923Z
 * 
 * DATA CLEANING LOGIC:
 * ====================
 * 1. Source phases: Registered, Undergoing, Trained
 * 2. Multi-row headers: Row 0-1 contain headers with merged cells
 * 3. Course columns: Each course has 4 sub-columns (SC, ST, EWS, Total)
 * 4. GEN category calculated as: Total - SC - ST - EWS
 * 5. Status field added to track which sheet the data came from
 * 5. Hierarchical structure: Centre > State > District > Training Org
 * 6. Empty rows and "Total" summary rows are excluded
 * 7. Only records with student_count > 0 are included
 */

export const enrollmentData = [
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "O Level",
    "category": "SC",
    "status": "Registered",
    "student_count": 45
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "O Level",
    "category": "ST",
    "status": "Registered",
    "student_count": 45
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "IoT",
    "category": "SC",
    "status": "Registered",
    "student_count": 11
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "IoT",
    "category": "ST",
    "status": "Registered",
    "student_count": 33
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 12
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Registered",
    "student_count": 48
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 21
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 8
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "SC",
    "status": "Registered",
    "student_count": 18
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "ST",
    "status": "Registered",
    "student_count": 9
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "EWS",
    "status": "Registered",
    "student_count": 3
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "IoT",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 20
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Registered",
    "student_count": 2
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 23
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "ST",
    "status": "Registered",
    "student_count": 37
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Registered",
    "student_count": 26
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Info Security",
    "category": "ST",
    "status": "Registered",
    "student_count": 31
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Info Security",
    "category": "EWS",
    "status": "Registered",
    "student_count": 3
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "O Level",
    "category": "SC",
    "status": "Registered",
    "student_count": 29
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "O Level",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 59
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 54
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Registered",
    "student_count": 4
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Registered",
    "student_count": 2
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "O Level",
    "category": "SC",
    "status": "Registered",
    "student_count": 73
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "O Level",
    "category": "ST",
    "status": "Registered",
    "student_count": 12
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "O Level",
    "category": "EWS",
    "status": "Registered",
    "student_count": 5
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "IoT",
    "category": "SC",
    "status": "Registered",
    "student_count": 14
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "IoT",
    "category": "ST",
    "status": "Registered",
    "student_count": 13
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "IoT",
    "category": "EWS",
    "status": "Registered",
    "student_count": 3
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 46
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Registered",
    "student_count": 13
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 20
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "ST",
    "status": "Registered",
    "student_count": 4
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 24
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Registered",
    "student_count": 6
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 136
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Registered",
    "student_count": 54
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Registered",
    "student_count": 16
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 72
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 18
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "O Level",
    "category": "SC",
    "status": "Registered",
    "student_count": 44
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "O Level",
    "category": "ST",
    "status": "Registered",
    "student_count": 35
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "O Level",
    "category": "EWS",
    "status": "Registered",
    "student_count": 11
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "IoT",
    "category": "SC",
    "status": "Registered",
    "student_count": 21
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "IoT",
    "category": "ST",
    "status": "Registered",
    "student_count": 7
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "IoT",
    "category": "EWS",
    "status": "Registered",
    "student_count": 2
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 76
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Registered",
    "student_count": 44
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 22
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "ST",
    "status": "Registered",
    "student_count": 5
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Registered",
    "student_count": 3
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "O Level",
    "category": "SC",
    "status": "Registered",
    "student_count": 15
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "O Level",
    "category": "ST",
    "status": "Registered",
    "student_count": 15
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 19
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Registered",
    "student_count": 11
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 7
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "ST",
    "status": "Registered",
    "student_count": 23
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 17
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Registered",
    "student_count": 13
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 7
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 39
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 5
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "SC",
    "status": "Registered",
    "student_count": 5
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 9
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Registered",
    "student_count": 51
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 17
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Registered",
    "student_count": 43
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 16
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 60
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "SC",
    "status": "Registered",
    "student_count": 25
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "IoT",
    "category": "SC",
    "status": "Registered",
    "student_count": 3
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "IoT",
    "category": "ST",
    "status": "Registered",
    "student_count": 7
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 9
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Registered",
    "student_count": 111
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 6
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Registered",
    "student_count": 114
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 40
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 20
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 51
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Registered",
    "student_count": 9
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 53
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Registered",
    "student_count": 7
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Koderma",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 56
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Koderma",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Registered",
    "student_count": 4
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Koderma",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 73
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Koderma",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Registered",
    "student_count": 5
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 35
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 25
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 75
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Registered",
    "student_count": 45
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 72
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Registered",
    "student_count": 47
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 149
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 7
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 34
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "SC",
    "status": "Registered",
    "student_count": 20
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 121
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Registered",
    "student_count": 14
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Registered",
    "student_count": 11
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 283
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Registered",
    "student_count": 35
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Registered",
    "student_count": 87
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Registered",
    "student_count": 20
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 124
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 21
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 30
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 53
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Registered",
    "student_count": 50
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Registered",
    "student_count": 66
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 160
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Registered",
    "student_count": 94
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Registered",
    "student_count": 52
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Registered",
    "student_count": 83
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Info Security",
    "category": "ST",
    "status": "Registered",
    "student_count": 8
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Info Security",
    "category": "EWS",
    "status": "Registered",
    "student_count": 44
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "SC",
    "status": "Registered",
    "student_count": 80
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "IoT",
    "category": "SC",
    "status": "Registered",
    "student_count": 31
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "IoT",
    "category": "EWS",
    "status": "Registered",
    "student_count": 9
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Registered",
    "student_count": 57
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 20
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 169
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "O Level",
    "category": "SC",
    "status": "Registered",
    "student_count": 29
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "O Level",
    "category": "ST",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "EWS",
    "status": "Registered",
    "student_count": 11
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "IoT",
    "category": "ST",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 156
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Registered",
    "student_count": 23
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 38
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Registered",
    "student_count": 6
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 202
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Registered",
    "student_count": 22
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Registered",
    "student_count": 93
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 34
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "SC",
    "status": "Registered",
    "student_count": 60
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 133
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Registered",
    "student_count": 9
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 200
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Registered",
    "student_count": 5
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Registered",
    "student_count": 35
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 95
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 16
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 18
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "SC",
    "status": "Registered",
    "student_count": 10
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 137
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Registered",
    "student_count": 32
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Registered",
    "student_count": 41
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 90
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Registered",
    "student_count": 14
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Registered",
    "student_count": 57
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 112
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Registered",
    "student_count": 19
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 70
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "ST",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Registered",
    "student_count": 17
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 197
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Registered",
    "student_count": 78
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 68
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 12
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 10
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 124
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Registered",
    "student_count": 22
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 24
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Registered",
    "student_count": 6
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 106
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Registered",
    "student_count": 20
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 40
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 10
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 10
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 150
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Registered",
    "student_count": 49
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 24
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Registered",
    "student_count": 6
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 134
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Registered",
    "student_count": 59
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 200
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 10
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 10
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 42
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Registered",
    "student_count": 18
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 42
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Registered",
    "student_count": 18
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 42
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Registered",
    "student_count": 18
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Registered",
    "student_count": 76
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Registered",
    "student_count": 23
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 42
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Registered",
    "student_count": 18
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Registered",
    "student_count": 93
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Registered",
    "student_count": 27
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "IoT",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 9
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "IoT",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 19
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "IoT",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 20
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 2
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 10
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Info Security",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 20
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "O Level",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 29
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "O Level",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 29
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 26
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 3
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "O Level",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 73
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "O Level",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 12
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "O Level",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 5
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "IoT",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 14
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "IoT",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 13
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "IoT",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 3
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 16
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 13
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 24
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 6
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 99
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 36
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 11
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 46
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 14
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "O Level",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 44
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "O Level",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 35
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "O Level",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 11
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 76
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 44
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "O Level",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 15
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "O Level",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 15
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 19
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 11
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 7
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 39
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 5
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 3
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 27
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 13
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 17
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 12
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 34
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 10
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 7
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 8
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 29
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 7
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 19
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 11
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 26
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 4
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 25
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 5
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Koderma",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 56
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Koderma",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 4
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Koderma",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 73
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Koderma",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 5
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 35
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 25
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 75
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 45
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 72
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 47
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 149
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 7
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 34
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 20
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 99
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 12
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 5
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 249
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 32
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 75
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 20
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 124
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 21
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 30
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 53
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 50
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 66
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 139
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 89
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 41
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 33
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Info Security",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 3
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 80
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "IoT",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 31
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "IoT",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 9
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 57
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 20
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 169
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "O Level",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 29
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "O Level",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 11
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "IoT",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 60
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 20
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 13
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 6
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 100
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 22
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 41
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 34
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 60
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 133
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 9
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 200
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 5
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 35
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 95
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 16
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 18
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 10
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 84
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 31
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 35
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 61
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 13
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 57
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 28
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 2
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 28
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 6
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 72
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 30
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 68
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 12
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 10
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 25
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 9
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 24
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 6
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 24
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 9
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 40
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 10
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 10
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 82
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 26
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 24
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 6
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 72
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 39
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 200
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 10
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 10
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 42
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 18
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 42
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 18
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 42
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 18
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 21
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 9
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 42
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 18
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 21
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 9
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "O Level (IT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 45
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "O Level (IT)",
    "category": "ST",
    "status": "Trained",
    "student_count": 45
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 2
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Trained",
    "student_count": 14
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 28
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 59
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 4
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Trained",
    "student_count": 21
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Trained",
    "student_count": 8
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Foundation course in Machine Learning using Python",
    "category": "SC",
    "status": "Trained",
    "student_count": 18
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Foundation course in Machine Learning using Python",
    "category": "ST",
    "status": "Trained",
    "student_count": 9
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Foundation course in Machine Learning using Python",
    "category": "EWS",
    "status": "Trained",
    "student_count": 3
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 23
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Trained",
    "student_count": 37
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 30
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 28
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 30
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 20
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Trained",
    "student_count": 4
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Trained",
    "student_count": 26
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Trained",
    "student_count": 4
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 21
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Trained",
    "student_count": 7
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 2
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 22
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Trained",
    "student_count": 5
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Trained",
    "student_count": 3
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 37
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 18
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 5
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 7
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Trained",
    "student_count": 23
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 17
  },
  {
    "centre": "Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 13
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Foundation course in Machine Learning using Python",
    "category": "SC",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Foundation course in Machine Learning using Python",
    "category": "ST",
    "status": "Trained",
    "student_count": 4
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 6
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Trained",
    "student_count": 24
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 4
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 26
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Trained",
    "student_count": 4
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Trained",
    "student_count": 26
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Foundation course in Machine Learning using Python",
    "category": "SC",
    "status": "Trained",
    "student_count": 3
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Foundation course in Machine Learning using Python",
    "category": "ST",
    "status": "Trained",
    "student_count": 7
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 6
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Trained",
    "student_count": 84
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 6
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 107
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Trained",
    "student_count": 21
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Trained",
    "student_count": 9
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 25
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Trained",
    "student_count": 5
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 28
  },
  {
    "centre": "Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 2
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 22
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Trained",
    "student_count": 2
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 6
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 34
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Trained",
    "student_count": 3
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Trained",
    "student_count": 12
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 21
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Trained",
    "student_count": 5
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Trained",
    "student_count": 11
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 50
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 8
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 41
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 96
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 3
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 102
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Trained",
    "student_count": 52
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Foundation course in Information Security",
    "category": "SC",
    "status": "Trained",
    "student_count": 25
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 53
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 6
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 29
  },
  {
    "centre": "Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 84
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 17
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 125
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Trained",
    "student_count": 48
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Foundation course in Information Security",
    "category": "SC",
    "status": "Trained",
    "student_count": 42
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Foundation course in Information Security",
    "category": "EWS",
    "status": "Trained",
    "student_count": 11
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 99
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 13
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 82
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Trained",
    "student_count": 11
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 68
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 23
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 62
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Trained",
    "student_count": 20
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 55
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 14
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 72
  },
  {
    "centre": "Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Trained",
    "student_count": 18
  }
];

// Helper functions
export const getUniqueCentres = () => [...new Set(enrollmentData.map(d => d.centre))];
export const getUniqueCourses = () => [...new Set(enrollmentData.map(d => d.course))];
export const getUniqueCategories = () => [...new Set(enrollmentData.map(d => d.category))];
export const getUniqueStates = () => [...new Set(enrollmentData.map(d => d.state))];
export const getUniqueDistricts = () => [...new Set(enrollmentData.map(d => d.district))];
export const getUniqueTrainingOrgs = () => [...new Set(enrollmentData.map(d => d.training_org))];
export const getUniqueStatuses = () => [...new Set(enrollmentData.map(d => d.status))];
