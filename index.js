const data = {
    name: " Jayashree Surwade ",
    job_role: " BE  Apprentice ",
    dp_image: "jayashreesurwade.jpg",
    email: " jayashreesurwade99@gmail.com",
    location: "Pune, India",
    phone: "+91-9766969064",
    dob: "02/18/1999",

    profile: `To  Seek and maintain full-time position that offers professional challenges.`,
 utilizing interpersonal skills, excellent time management and  problem solving skills.
    employment_history: [
        {
            role: "BE Apprentice",
            company: " Bharat Electronics  Ltd",
            location: "Pune",
            from: "December 2022",
            to: "December 2023"
        }
    ],

    education: [
        {
            qualification: "SSC",
            school: " D.R.Kanya School",
            location: "Amalner",
            from: "June 2004",
            to: "April 2014"
        }
    ],

    languages: [
        { name: "English", score: 4 },
        { name: "Marathi", score: 5 },
        { name: "Hindi", score: 4 }
    ],

    skills: [
        { name: "HTML & CSS", score: 4 },
        { name: "Javascript", score: 4 },
        { name: "Python", score: 4 },
        { name: "React", score: 4 },
        { name: "C++", score: 4 },
        { name: "SAP Fiori", score: 4 },
        { name: "ABAP Dev", score: 4 },
    ]
}

const Icons = {

    Star: ({ color }) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
    ),

    Phone: () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
        )
    },

    Location: () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>

        )
    },

    Email: () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
            </svg>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Resume data={data} icon={Icons} />
    </React.StrictMode>,
    document.getElementById("root")
)
