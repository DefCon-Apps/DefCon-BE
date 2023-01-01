export interface API_DATA{
    RESULT_CODE: number,
    RESULT_MSG: string,
    RESULT_DATA: MainEvent | MemberData | MemberList | ProjectData | ProjectList | object
}

export interface MainEvent{
    content: String,
    image: String,
    title: String
}

export interface MemberData{
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

export interface MemberHistoryData{
    date: String,
    content: String
}

export interface MemberList{
    count: Number,
    data: Array<MemberData>
}

export interface ProjectData{
    title: String,
    content: String,
    date: String,
    image: Array<String>,
    tech: Array<String>,
    user: Array<ProjectMemberData>
}

export interface ProjectMemberData{
    user: String,
    role: String
}

export interface ProjectList{
    count: Number,
    data: Array<ProjectData>
}

export interface ProjectListItem{
    id: Number,
    data: ProjectData
}