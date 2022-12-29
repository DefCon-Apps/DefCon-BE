interface MainEvent{
    content: String,
    image: String,
    title: String
}

interface MemberData{
    blog: Object,
    boj: Object,
    facebook: Object,
    github: Object,
    instagram: Object,
    twitter: Object,

    comment: String,
    company: String,
    name: String,
    profileImage: String,

    history: Array<MemberHistoryData>
}

interface MemberHistoryData{
    date: String,
    content: String
}

interface MemberList{
    count: Number,
    data: Array<MemberData>
}

interface ProjectData{
    title: String,
    content: String,
    date: String,
    image: Array<String>,
    tech: Array<String>,
    user: Array<ProjectMemberData>
}

interface ProjectMemberData{
    user: String,
    role: String
}

interface ProjectList{
    count: Number,
    data: Array<ProjectData>
}