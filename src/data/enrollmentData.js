/**
 * NIELIT SDUY Student Enrollment Data
 * Auto-generated from: phase CSV files (preferred) or SDUY MPR November 2025 revised 09-12-2025.xlsx (fallback)
 * Generated on: 2026-01-05T11:29:05.250Z
 * 
 * DATA CLEANING LOGIC:
 * ====================
 * 1. Source phases: Registered, Undergoing, Trained, Certified
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
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "",
    "category": "Female",
    "status": "Certified",
    "student_count": 36
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "O Level (IT)",
    "category": "SC",
    "status": "Certified",
    "student_count": 25
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "O Level (IT)",
    "category": "ST",
    "status": "Certified",
    "student_count": 29
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Certified",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Certified",
    "student_count": 5
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Certified",
    "student_count": 9
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Certified",
    "student_count": 41
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Certified",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Certified",
    "student_count": 18
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Foundation course in Machine Learning using Python",
    "category": "SC",
    "status": "Certified",
    "student_count": 2
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Foundation course in Machine Learning using Python",
    "category": "EWS",
    "status": "Certified",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Certified",
    "student_count": 15
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Certified",
    "student_count": 15
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Certified",
    "student_count": 25
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Certified",
    "student_count": 27
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Certified",
    "student_count": 24
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Certified",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Certified",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Certified",
    "student_count": 32
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Certified",
    "student_count": 29
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Certified",
    "student_count": 17
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Certified",
    "student_count": 4
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Certified",
    "student_count": 101
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Certified",
    "student_count": 26
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Certified",
    "student_count": 4
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Certified",
    "student_count": 20
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Certified",
    "student_count": 7
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Certified",
    "student_count": 22
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Certified",
    "student_count": 5
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Certified",
    "student_count": 3
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Certified",
    "student_count": 37
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Certified",
    "student_count": 18
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Certified",
    "student_count": 5
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Certified",
    "student_count": 31
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Certified",
    "student_count": 5
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Certified",
    "student_count": 16
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Certified",
    "student_count": 17
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Certified",
    "student_count": 12
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Certified",
    "student_count": 24
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Certified",
    "student_count": 27
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Certified",
    "student_count": 23
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Certified",
    "student_count": 67
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Certified",
    "student_count": 22
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Certified",
    "student_count": 2
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Certified",
    "student_count": 6
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Certified",
    "student_count": 33
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Certified",
    "student_count": 3
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Certified",
    "student_count": 12
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Certified",
    "student_count": 29
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Certified",
    "student_count": 21
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Certified",
    "student_count": 5
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Certified",
    "student_count": 11
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "SC",
    "status": "Certified",
    "student_count": 41
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "ST",
    "status": "Certified",
    "student_count": 7
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "EWS",
    "status": "Certified",
    "student_count": 36
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Certified",
    "student_count": 134
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Certified",
    "student_count": 84
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Certified",
    "student_count": 3
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Certified",
    "student_count": 13
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Certified",
    "student_count": 97
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Certified",
    "student_count": 52
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Certified",
    "student_count": 17
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Certified",
    "student_count": 20
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Certified",
    "student_count": 5
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Certified",
    "student_count": 5
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Certified",
    "student_count": 68
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Certified",
    "student_count": 35
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Certified",
    "student_count": 11
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Certified",
    "student_count": 42
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Certified",
    "student_count": 11
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Certified",
    "student_count": 61
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Certified",
    "student_count": 12
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Certified",
    "student_count": 96
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Certified",
    "student_count": 83
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Certified",
    "student_count": 2
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Certified",
    "student_count": 13
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Certified",
    "student_count": 78
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Certified",
    "student_count": 2
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Certified",
    "student_count": 10
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Certified",
    "student_count": 33
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Certified",
    "student_count": 56
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Certified",
    "student_count": 13
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Certified",
    "student_count": 44
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Certified",
    "student_count": 10
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Certified",
    "student_count": 108
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Certified",
    "student_count": 55
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Certified",
    "student_count": 14
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Certified",
    "student_count": 72
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Certified",
    "student_count": 18
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "",
    "category": "Female",
    "status": "Trained",
    "student_count": 59
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "O Level (IT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 45
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "O Level (IT)",
    "category": "ST",
    "status": "Trained",
    "student_count": 45
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 2
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Trained",
    "student_count": 14
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 12
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 48
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Trained",
    "student_count": 71
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Trained",
    "student_count": 21
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Trained",
    "student_count": 8
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Foundation course in Machine Learning using Python",
    "category": "SC",
    "status": "Trained",
    "student_count": 18
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Foundation course in Machine Learning using Python",
    "category": "ST",
    "status": "Trained",
    "student_count": 9
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Foundation course in Machine Learning using Python",
    "category": "EWS",
    "status": "Trained",
    "student_count": 3
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 23
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Trained",
    "student_count": 37
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "SC",
    "status": "Trained",
    "student_count": 16
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "ST",
    "status": "Trained",
    "student_count": 11
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "EWS",
    "status": "Trained",
    "student_count": 3
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Trained",
    "student_count": 29
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Trained",
    "student_count": 30
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 28
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Trained",
    "student_count": 36
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Trained",
    "student_count": 30
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 20
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Trained",
    "student_count": 4
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Trained",
    "student_count": 101
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Trained",
    "student_count": 26
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Trained",
    "student_count": 4
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 21
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Trained",
    "student_count": 7
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 2
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 22
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Trained",
    "student_count": 5
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Trained",
    "student_count": 3
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 37
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 18
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 5
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Trained",
    "student_count": 38
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 7
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Trained",
    "student_count": 23
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 17
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 13
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Trained",
    "student_count": 33
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Training Partner",
    "course": "Foundation course in Machine Learning using Python",
    "category": "SC",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Training Partner",
    "course": "Foundation course in Machine Learning using Python",
    "category": "ST",
    "status": "Trained",
    "student_count": 4
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Trained",
    "student_count": 6
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Trained",
    "student_count": 24
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 4
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 26
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Trained",
    "student_count": 160
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Trained",
    "student_count": 4
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Trained",
    "student_count": 26
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Trained",
    "student_count": 3
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Trained",
    "student_count": 7
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Trained",
    "student_count": 6
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Trained",
    "student_count": 84
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 6
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 107
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Trained",
    "student_count": 27
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Trained",
    "student_count": 21
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Trained",
    "student_count": 9
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Trained",
    "student_count": 25
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Trained",
    "student_count": 5
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 28
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 2
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Trained",
    "student_count": 67
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Trained",
    "student_count": 22
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Trained",
    "student_count": 2
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Trained",
    "student_count": 6
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 34
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 3
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 12
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Trained",
    "student_count": 31
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 21
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 5
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 11
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "SC",
    "status": "Trained",
    "student_count": 50
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "ST",
    "status": "Trained",
    "student_count": 8
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "EWS",
    "status": "Trained",
    "student_count": 41
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Trained",
    "student_count": 155
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Trained",
    "student_count": 96
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Trained",
    "student_count": 3
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 25
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 102
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 52
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Trained",
    "student_count": 54
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Trained",
    "student_count": 53
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Trained",
    "student_count": 6
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 29
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Trained",
    "student_count": 123
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Trained",
    "student_count": 84
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Trained",
    "student_count": 17
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Trained",
    "student_count": 42
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Trained",
    "student_count": 11
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 125
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 48
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Trained",
    "student_count": 113
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Trained",
    "student_count": 99
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Trained",
    "student_count": 13
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 82
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Trained",
    "student_count": 1
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 11
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Trained",
    "student_count": 60
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Trained",
    "student_count": 68
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Trained",
    "student_count": 23
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 62
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 20
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Trained",
    "student_count": 108
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Trained",
    "student_count": 55
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Trained",
    "student_count": 14
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Trained",
    "student_count": 72
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Trained",
    "student_count": 18
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 59
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "O Level (IT)",
    "category": "SC",
    "status": "Registered",
    "student_count": 45
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "O Level (IT)",
    "category": "ST",
    "status": "Registered",
    "student_count": 45
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Registered",
    "student_count": 2
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Registered",
    "student_count": 14
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 12
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 48
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 122
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Registered",
    "student_count": 21
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Registered",
    "student_count": 8
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Foundation course in Machine Learning using Python",
    "category": "SC",
    "status": "Registered",
    "student_count": 18
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Foundation course in Machine Learning using Python",
    "category": "ST",
    "status": "Registered",
    "student_count": 9
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Foundation course in Machine Learning using Python",
    "category": "EWS",
    "status": "Registered",
    "student_count": 3
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Registered",
    "student_count": 9
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Registered",
    "student_count": 19
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 20
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 2
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 23
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Registered",
    "student_count": 37
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "SC",
    "status": "Registered",
    "student_count": 26
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "ST",
    "status": "Registered",
    "student_count": 31
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "EWS",
    "status": "Registered",
    "student_count": 3
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 73
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "O Level (IT)",
    "category": "SC",
    "status": "Registered",
    "student_count": 29
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "O Level (IT)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 59
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 54
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 4
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 2
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 10
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "O Level (IT)",
    "category": "SC",
    "status": "Registered",
    "student_count": 20
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "O Level (IT)",
    "category": "ST",
    "status": "Registered",
    "student_count": 9
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "O Level (IT)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Registered",
    "student_count": 14
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Registered",
    "student_count": 13
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Govt Polytechnic/ITI/NIELIT Own centre",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 3
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 66
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "O Level (IT)",
    "category": "SC",
    "status": "Registered",
    "student_count": 53
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "O Level (IT)",
    "category": "ST",
    "status": "Registered",
    "student_count": 3
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "O Level (IT)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 4
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 46
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 13
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 20
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Registered",
    "student_count": 4
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 24
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 6
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Govt Polytechnic/ITI",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 25
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Govt Polytechnic/ITI",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 13
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Govt Polytechnic/ITI",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 13
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Govt Polytechnic/ITI",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 4
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 286
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Registered",
    "student_count": 72
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Registered",
    "student_count": 18
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "O Level (IT)",
    "category": "SC",
    "status": "Registered",
    "student_count": 44
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "O Level (IT)",
    "category": "ST",
    "status": "Registered",
    "student_count": 35
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "O Level (IT)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 11
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Registered",
    "student_count": 21
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Registered",
    "student_count": 7
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 2
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 76
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 44
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 22
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Registered",
    "student_count": 5
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Registered",
    "student_count": 3
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 123
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 41
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 12
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 70
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "O Level (IT)",
    "category": "SC",
    "status": "Registered",
    "student_count": 15
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "O Level (IT)",
    "category": "ST",
    "status": "Registered",
    "student_count": 15
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 19
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 11
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 7
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Registered",
    "student_count": 23
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 17
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 13
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Govt Polytechnic/ITI",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 21
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Govt Polytechnic/ITI",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Registered",
    "student_count": 6
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Govt Polytechnic/ITI",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Registered",
    "student_count": 10
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Govt Polytechnic/ITI",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 5
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 80
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Registered",
    "student_count": 29
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Training Partner",
    "course": "Foundation course in Machine Learning using Python",
    "category": "SC",
    "status": "Registered",
    "student_count": 5
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 9
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 51
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 17
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 43
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Govt Polytechnic/ITI",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Registered",
    "student_count": 7
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Govt Polytechnic/ITI",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Registered",
    "student_count": 9
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Govt Polytechnic/ITI",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Govt Polytechnic/ITI",
    "course": "Foundation course in Machine Learning using Python",
    "category": "SC",
    "status": "Registered",
    "student_count": 25
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 210
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Registered",
    "student_count": 9
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Registered",
    "student_count": 51
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Registered",
    "student_count": 3
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Registered",
    "student_count": 7
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 9
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 111
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 6
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 114
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 78
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Registered",
    "student_count": 40
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Registered",
    "student_count": 20
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 51
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 9
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 53
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 7
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Koderma",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 32
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Koderma",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 56
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Koderma",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 4
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Koderma",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 73
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Koderma",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 5
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 144
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Registered",
    "student_count": 35
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Registered",
    "student_count": 25
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 75
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 45
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 72
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 47
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 227
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Registered",
    "student_count": 149
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Registered",
    "student_count": 7
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 34
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Foundation course in Machine Learning using Python",
    "category": "SC",
    "status": "Registered",
    "student_count": 20
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 121
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 14
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 11
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 283
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 35
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 87
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "SC",
    "status": "Registered",
    "student_count": 20
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 368
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Registered",
    "student_count": 124
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Registered",
    "student_count": 21
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 30
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 53
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 50
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 66
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 160
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 94
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 52
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "SC",
    "status": "Registered",
    "student_count": 83
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "ST",
    "status": "Registered",
    "student_count": 8
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "EWS",
    "status": "Registered",
    "student_count": 44
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Govt Polytechnic/ITI",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 18
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Govt Polytechnic/ITI",
    "course": "Foundation course in Machine Learning using Python",
    "category": "SC",
    "status": "Registered",
    "student_count": 25
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Govt Polytechnic/ITI",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Registered",
    "student_count": 16
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Govt Polytechnic/ITI",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 9
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Govt Polytechnic/ITI",
    "course": "Foundation course in Information Security",
    "category": "SC",
    "status": "Registered",
    "student_count": 15
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 348
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Registered",
    "student_count": 20
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 169
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "O Level (IT)",
    "category": "SC",
    "status": "Registered",
    "student_count": 29
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "O Level (IT)",
    "category": "ST",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Foundation course in Machine Learning using Python",
    "category": "SC",
    "status": "Registered",
    "student_count": 55
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Foundation course in Machine Learning using Python",
    "category": "EWS",
    "status": "Registered",
    "student_count": 11
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "SC",
    "status": "Registered",
    "student_count": 15
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Foundation course in Internet of Things (IoT)",
    "category": "ST",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 156
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 23
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 38
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Registered",
    "student_count": 6
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 202
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 22
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 93
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "SC",
    "status": "Registered",
    "student_count": 42
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 118
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Registered",
    "student_count": 34
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Training Partner",
    "course": "Foundation course in Machine Learning using Python",
    "category": "SC",
    "status": "Registered",
    "student_count": 60
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 133
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 9
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 200
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 5
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "SC",
    "status": "Registered",
    "student_count": 35
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 259
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Registered",
    "student_count": 95
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Registered",
    "student_count": 16
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 18
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Foundation course in Machine Learning using Python",
    "category": "SC",
    "status": "Registered",
    "student_count": 10
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 137
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 32
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 41
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 90
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 14
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Training Partner",
    "course": "Foundation course in Information Security",
    "category": "SC",
    "status": "Registered",
    "student_count": 57
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 196
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 112
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 19
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 70
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "ST",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Registered",
    "student_count": 17
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 197
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 78
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 185
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Registered",
    "student_count": 68
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Registered",
    "student_count": 12
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 10
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 124
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "ST",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 22
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 24
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Registered",
    "student_count": 6
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 106
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "ST",
    "status": "Registered",
    "student_count": 1
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 20
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 207
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Registered",
    "student_count": 40
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Registered",
    "student_count": 10
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 10
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 150
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 49
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 24
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Registered",
    "student_count": 6
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 134
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 59
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 118
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "SC",
    "status": "Registered",
    "student_count": 200
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "ST",
    "status": "Registered",
    "student_count": 10
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Training Partner",
    "course": "Product Assembly Assistant (Solar-LED)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 10
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 42
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 18
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 42
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Registered",
    "student_count": 18
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 42
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 18
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Training Partner",
    "course": "",
    "category": "Female",
    "status": "Registered",
    "student_count": 166
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "SC",
    "status": "Registered",
    "student_count": 76
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Training Partner",
    "course": "Certified Computer Application Accounting and Publishing Assistant",
    "category": "EWS",
    "status": "Registered",
    "student_count": 23
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "SC",
    "status": "Registered",
    "student_count": 42
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Training Partner",
    "course": "Certified Web Developer",
    "category": "EWS",
    "status": "Registered",
    "student_count": 18
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "SC",
    "status": "Registered",
    "student_count": 93
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Training Partner",
    "course": "Certified Data Entry and Office Assistant (Upskilling)",
    "category": "EWS",
    "status": "Registered",
    "student_count": 27
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "IoT",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 9
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "IoT",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 19
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "IoT",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 20
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 2
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 10
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Khordha",
    "training_org": "Total",
    "course": "Info Security",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 20
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "O Level",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 29
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "O Level",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 29
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 26
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 3
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "O Level",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 73
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "O Level",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 12
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "O Level",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 5
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "IoT",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 14
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "IoT",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 13
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "IoT",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 3
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 16
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 13
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 24
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Balasore",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 6
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 99
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 36
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 11
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 46
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 14
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "O Level",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 44
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "O Level",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 35
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "O Level",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 11
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 76
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Ganjam",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 44
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "O Level",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 15
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "O Level",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 15
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 19
  },
  {
    "centre": "NIELIT Bhubaneswar",
    "state": "Odisha",
    "district": "Naupada",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 11
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 7
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 39
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 5
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 3
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 27
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 13
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Seraikela Kharsawan",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 17
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 12
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 34
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 10
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 7
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 8
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 29
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Simdega",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 7
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 19
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 11
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 26
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 4
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 25
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Deoghar",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 5
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Koderma",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 56
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Koderma",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 4
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Koderma",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 73
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Koderma",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 5
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 35
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 25
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 75
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 45
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 72
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 47
  },
  {
    "centre": "NIELIT Ranchi",
    "state": "Jharkhand",
    "district": "Chatra",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 149
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 7
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 34
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 20
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 99
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 12
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 5
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 249
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 32
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 75
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Birbhum",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 20
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 124
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 21
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 30
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 53
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 50
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 66
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 139
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 89
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 41
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 33
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Purulia",
    "training_org": "Total",
    "course": "Info Security",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 3
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 80
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "IoT",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 31
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "IoT",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 9
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 57
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 20
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 169
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "O Level",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 29
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "O Level",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 11
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "IoT",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 60
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 20
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 13
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 6
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 100
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 22
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Howrah",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 41
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 34
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 60
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 133
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 9
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 200
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 5
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Maldah",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 35
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 95
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 16
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 18
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Machine Learning",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 10
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 84
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 31
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 35
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 61
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 13
  },
  {
    "centre": "NIELIT Kolkata",
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "training_org": "Total",
    "course": "Info Security",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 57
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 28
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 2
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 28
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 6
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 72
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 1
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Gaya",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 30
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 68
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 12
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 10
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 25
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 9
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 24
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 6
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 24
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Rohtas",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 9
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 40
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 10
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 10
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 82
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 26
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 24
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 6
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 72
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Lakhisarai",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 39
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 200
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "ST",
    "status": "Undergoing",
    "student_count": 10
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Product Assembly Assistant",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 10
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 42
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 18
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 42
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 18
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 42
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Motihari",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 18
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 21
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "CCAAPA",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 9
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 42
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "Web Developer",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 18
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "SC",
    "status": "Undergoing",
    "student_count": 21
  },
  {
    "centre": "NIELIT Patna",
    "state": "Bihar",
    "district": "Purnea",
    "training_org": "Total",
    "course": "Data Entry",
    "category": "EWS",
    "status": "Undergoing",
    "student_count": 9
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
