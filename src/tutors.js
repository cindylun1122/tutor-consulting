const tutors = [{
        name: "John Doe",
        course: ["Physics", "History"],
        satisfaction_score: 100,
        target_school: ["Stanford University", "University of Michigan"],
        available_time_slot: ["10:00-11:00", "21:00-22:00", "08:00-09:00"]
    },
    {
        name: "Emily Zhang",
        course: ["Math", "Biology", "Spanish"],
        satisfaction_score: 99,
        target_school: ["University of Southern California", "Harvard University"],
        available_time_slot: ["13:00-14:00", "18:00-19:00"]
    },
    {
        name: "Carlos Ramirez",
        course: ["History", "Geography", "English"],
        satisfaction_score: 96,
        target_school: ["Carnegie Mellon University", "Brown University"],
        available_time_slot: ["15:00-16:00", "10:00-11:00"]
    },
    {
        name: "Sara Kim",
        course: ["Chemistry"],
        satisfaction_score: 98,
        target_school: ["Northwestern University", "California Institute of Technology"],
        available_time_slot: ["20:00-21:00", "16:00-17:00"]
    },
    {
        name: "Daniel Lee",
        course: ["Geography", "History"],
        satisfaction_score: 93,
        target_school: ["Cornell University", "Princeton University"],
        available_time_slot: ["11:00-12:00", "10:00-11:00", "13:00-14:00", "15:00-16:00"]
    },
    {
        name: "Lina Patel",
        course: ["Spanish"],
        satisfaction_score: 86,
        target_school: ["University of Pennsylvania", "Princeton University"],
        available_time_slot: ["18:00-19:00", "17:00-18:00", "11:00-12:00", "16:00-17:00"]
    },
    {
        name: "Tom Nguyen",
        course: ["Physics"],
        satisfaction_score: 91,
        target_school: ["Yale University", "Massachusetts Institute of Technology"],
        available_time_slot: ["17:00-18:00", "15:00-16:00"]
    },
    {
        name: "Rachel Adams",
        course: ["Physics", "Spanish"],
        satisfaction_score: 98,
        target_school: ["Columbia University", "University of Michigan"],
        available_time_slot: ["14:00-15:00", "10:00-11:00", "08:00-09:00"]
    },
    {
        name: "Michael Chen",
        course: ["Math", "Spanish"],
        satisfaction_score: 95,
        target_school: ["University of Pennsylvania", "Duke University"],
        available_time_slot: ["21:00-22:00", "16:00-17:00", "13:00-14:00", "14:00-15:00"]
    },
    {
        name: "Sophia Rossi",
        course: ["Biology", "Chemistry", "English"],
        satisfaction_score: 85,
        target_school: ["Carnegie Mellon University", "Northwestern University"],
        available_time_slot: ["16:00-17:00", "15:00-16:00", "11:00-12:00"]
    },
    {
        name: "David Kim",
        course: ["Chemistry"],
        satisfaction_score: 89,
        target_school: ["University of California, Los Angeles", "University of Pennsylvania"],
        available_time_slot: ["17:00-18:00", "15:00-16:00", "18:00-19:00"]
    },
    {
        name: "Ava Brown",
        course: ["History", "Spanish"],
        satisfaction_score: 97,
        target_school: ["University of Chicago", "University of Southern California"],
        available_time_slot: ["12:00-13:00", "20:00-21:00", "09:00-10:00"]
    },
    {
        name: "Ethan Johnson",
        course: ["English", "Biology"],
        satisfaction_score: 90,
        target_school: ["Massachusetts Institute of Technology", "Cornell University"],
        available_time_slot: ["10:00-11:00", "13:00-14:00"]
    },
    {
        name: "Isabella Martinez",
        course: ["Spanish", "Chemistry"],
        satisfaction_score: 94,
        target_school: ["Columbia University", "Brown University"],
        available_time_slot: ["14:00-15:00", "17:00-18:00"]
    },
    {
        name: "Lucas Garcia",
        course: ["Math", "Geography"],
        satisfaction_score: 88,
        target_school: ["University of California, Berkeley", "Harvard University"],
        available_time_slot: ["11:00-12:00", "08:00-09:00"]
    },
    {
        name: "Mia Wilson",
        course: ["Physics", "History"],
        satisfaction_score: 92,
        target_school: ["Stanford University", "University of Texas at Austin"],
        available_time_slot: ["19:00-20:00", "09:00-10:00", "21:00-22:00"]
    },
    {
        name: "Alexander Clark",
        course: ["Biology", "English"],
        satisfaction_score: 90,
        target_school: ["Yale University", "Duke University"],
        available_time_slot: ["13:00-14:00", "15:00-16:00", "18:00-19:00"]
    },
    {
        name: "Charlotte Lewis",
        course: ["Math"],
        satisfaction_score: 87,
        target_school: ["University of Michigan", "Massachusetts Institute of Technology"],
        available_time_slot: ["09:00-10:00", "10:00-11:00", "20:00-21:00"]
    },
    {
        name: "James Walker",
        course: ["English", "History"],
        satisfaction_score: 99,
        target_school: ["University of Pennsylvania", "Princeton University"],
        available_time_slot: ["08:00-09:00", "12:00-13:00"]
    },
    {
        name: "Olivia Hall",
        course: ["Chemistry", "Biology"],
        satisfaction_score: 95,
        target_school: ["California Institute of Technology", "Northwestern University"],
        available_time_slot: ["16:00-17:00", "21:00-22:00", "18:00-19:00"]
    },
    {
        name: "Benjamin Allen",
        course: ["Math", "Physics"],
        satisfaction_score: 93,
        target_school: ["University of Chicago", "Columbia University"],
        available_time_slot: ["09:00-10:00", "17:00-18:00"]
    },
    {
        name: "Amelia Young",
        course: ["English", "Spanish"],
        satisfaction_score: 96,
        target_school: ["Stanford University", "University of California, Los Angeles"],
        available_time_slot: ["14:00-15:00", "10:00-11:00", "20:00-21:00"]
    },
    {
        name: "Henry Hernandez",
        course: ["Geography", "History"],
        satisfaction_score: 91,
        target_school: ["Cornell University", "New York University"],
        available_time_slot: ["11:00-12:00", "12:00-13:00"]
    },
    {
        name: "Harper King",
        course: ["Chemistry", "Math"],
        satisfaction_score: 88,
        target_school: ["University of Southern California", "Yale University"],
        available_time_slot: ["08:00-09:00", "15:00-16:00", "18:00-19:00"]
    },
    {
        name: "Sebastian Wright",
        course: ["Physics", "English"],
        satisfaction_score: 97,
        target_school: ["Massachusetts Institute of Technology", "University of Michigan"],
        available_time_slot: ["13:00-14:00", "17:00-18:00"]
    },
    {
        name: "Ella Scott",
        course: ["Biology"],
        satisfaction_score: 90,
        target_school: ["Brown University", "Princeton University"],
        available_time_slot: ["10:00-11:00", "19:00-20:00"]
    },
    {
        name: "Jack Green",
        course: ["Math", "Chemistry"],
        satisfaction_score: 92,
        target_school: ["University of Texas at Austin", "University of California, Berkeley"],
        available_time_slot: ["11:00-12:00", "15:00-16:00", "21:00-22:00"]
    },
    {
        name: "Abigail Adams",
        course: ["Spanish", "History"],
        satisfaction_score: 95,
        target_school: ["Duke University", "University of Pennsylvania"],
        available_time_slot: ["14:00-15:00", "13:00-14:00"]
    },
    {
        name: "Owen Baker",
        course: ["Physics", "Geography"],
        satisfaction_score: 89,
        target_school: ["University of California, Los Angeles", "Stanford University"],
        available_time_slot: ["09:00-10:00", "10:00-11:00", "12:00-13:00"]
    },
    {
        name: "Emily Nelson",
        course: ["English", "Biology"],
        satisfaction_score: 98,
        target_school: ["California Institute of Technology", "Harvard University"],
        available_time_slot: ["19:00-20:00", "20:00-21:00"]
    },
    {
        name: "Noah Rivera",
        course: ["History", "Spanish"],
        satisfaction_score: 91,
        target_school: ["University of Chicago", "New York University"],
        available_time_slot: ["13:00-14:00", "15:00-16:00", "18:00-19:00"]
    },
    {
        name: "Grace Campbell",
        course: ["Math", "English"],
        satisfaction_score: 94,
        target_school: ["Massachusetts Institute of Technology", "Columbia University"],
        available_time_slot: ["09:00-10:00", "10:00-11:00"]
    },
    {
        name: "Liam Mitchell",
        course: ["Biology", "Chemistry"],
        satisfaction_score: 87,
        target_school: ["Yale University", "University of California, Berkeley"],
        available_time_slot: ["12:00-13:00", "17:00-18:00"]
    },
    {
        name: "Chloe Roberts",
        course: ["Geography", "English"],
        satisfaction_score: 92,
        target_school: ["Northwestern University", "University of Southern California"],
        available_time_slot: ["08:00-09:00", "16:00-17:00", "20:00-21:00"]
    },
    {
        name: "Jacob Carter",
        course: ["Math", "Physics"],
        satisfaction_score: 90,
        target_school: ["University of Michigan", "Princeton University"],
        available_time_slot: ["11:00-12:00", "14:00-15:00"]
    },
    {
        name: "Victoria Perez",
        course: ["Spanish", "Biology"],
        satisfaction_score: 96,
        target_school: ["University of California, Los Angeles", "Duke University"],
        available_time_slot: ["15:00-16:00", "19:00-20:00"]
    },
    {
        name: "William Turner",
        course: ["English"],
        satisfaction_score: 88,
        target_school: ["Cornell University", "Stanford University"],
        available_time_slot: ["09:00-10:00", "20:00-21:00"]
    },
    {
        name: "Sofia Phillips",
        course: ["Chemistry", "Geography"],
        satisfaction_score: 97,
        target_school: ["University of Pennsylvania", "California Institute of Technology"],
        available_time_slot: ["10:00-11:00", "11:00-12:00", "21:00-22:00"]
    },
    {
        name: "Daniel Evans",
        course: ["Physics", "History"],
        satisfaction_score: 93,
        target_school: ["University of Chicago", "Brown University"],
        available_time_slot: ["13:00-14:00", "17:00-18:00", "19:00-20:00"]
    },
    {
        name: "Lily Edwards",
        course: ["Biology", "English"],
        satisfaction_score: 99,
        target_school: ["Harvard University", "Massachusetts Institute of Technology"],
        available_time_slot: ["08:00-09:00", "12:00-13:00"]
    }

];

export { tutors };