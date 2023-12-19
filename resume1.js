function Resume({ data, icon }) {
    return (
        <div>
            <TopSection data={data} />
            <MidSection data={data} icon={icon} />
            <BodySection data={data} />
        </div>
    )
}

function capitalize(word) {
    return [word.charAt().toUpperCase(), word.slice(1)].join("")
}

function TopSection({ data }) {
    return (
        <div
            // style={{ padding: 5, color: "white", display: "flex", justifyContent: "center" }}
            className="bg-blue-700 text-white p-5 flex justify-center"
        >
            {data.dp_image &&
                <div className="w-[20%] flex justify-end p-2">
                    <img src={data.dp_image} className="rounded-full ring-2 ring-blue-500 w-20 h-20" />
                </div>
            }
            <div className="w-full flex flex-col justify-center ">
                {data.name
                    &&
                    <div className="text-3xl font-extrabold font-mono">{data.name}</div>
                }
                {data.name
                    &&
                    <div className="">{data.job_role}</div>
                }
            </div>
        </div>
    )
}

function MidSection({ icon, data }) {
    return (
        <div className="flex divide-x-2 px-10 border-b-2">
            {[
                ...['email', 'location', 'phone'].map(i => ({ icon: icon[capitalize(i)], text: data[i] }))
            ].map((item, key) => (
                <div key={key} className="flex m-1 p-1 justify-center">
                    <div className="px-1 mx-1">
                        <item.icon />
                    </div>
                    <div className="">
                        {item.text}
                    </div>
                </div>
            ))
            }
        </div>
    )
}

function BodySection({ data }) {
    return (
        <div className="flex">
            <LeftBodySection data={data} />
            <RightBodySection data={data} />
        </div>
    )
}

function LeftBodySection({ data }) {
    return (
        <div className="flex flex-col p-1 w-[70%]">
            <div className="px-5 py-2">
                <div className="text-xl px-3 font-semibold">Profile</div>
                <div className="leading-relaxed px-5">
                    {data.profile}
                </div>
            </div>

            <div className="px-5 py-2">
                <div className="text-xl px-3 font-semibold">Employment History</div>
                <ul className="px-5">
                    {
                        (data.employment_history ?? []).map((job, key) => (
                            <li key={key} className="px-5 py-3">
                                <div className="font-medium text-ellipsis">{[job.role, job.company, job.location].join(", ")}</div>
                                <div className="font-thin text-sm text-ellipsis">{[job.from, job.to].join(" - ")}</div>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="px-5 py-2">
                <div className="text-xl px-3 font-semibold">Education</div>
                <ul className="px-5">
                    {
                        (data.education ?? []).map((edu, key) => (
                            <li key={key} className="px-5 py-3">
                                <div className="font-medium text-ellipsis">{[edu.qualification, edu.school, edu.location].join(", ")}</div>
                                <div className="font-thin text-sm text-ellipsis">{[edu.from, edu.to].join(" - ")}</div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div >
    )
}

function RightBodySection({ data }) {
    return (
        <div className="w-[30%]">
            <div className="px-5 py-2">
                <div className="text-xl font-semibold">Details</div>
                <div className="font-thin text-sm">Date of Birth</div>
                <div className="text-ellipsis">{new Date(data.dob).toDateString().split(" ").slice(1).join(" ")}</div>
            </div>

            <div className="px-5 py-2">
                <div className="text-xl font-semibold">Skills</div>
                {(data.skills ?? []).map((skill, key) => (
                    <div key={key}>
                        <div className="font-medium text-sm">{skill.name}</div>
                        <div className="flex">
                            {(skill.score > -1 && skill.score <= 5) && [
                                ...[...new Array(skill.score)].map(() => "yellow"),
                                ...[...Array(5 - skill.score)].map(() => "white")
                            ].map((i, k) =>
                                <div key={k} className="hover:cursor-pointer hover:opacity-80">
                                    <Icons.Star color={i} />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="px-5 py-2">
                <div className="text-xl font-semibold">Skills</div>
                {(data.languages ?? []).map((lang, key) => (
                    <div key={key}>
                        <div className="font-medium text-sm">{lang.name}</div>
                        <div className="flex">
                            {(lang.score > -1 && lang.score <= 5) && [
                                ...[...new Array(lang.score)].map(() => "yellow"),
                                ...[...Array(5 - lang.score)].map(() => "white")
                            ].map((i, k) =>
                                <div key={k} className="hover:cursor-pointer hover:opacity-80">
                                    <Icons.Star color={i} />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}