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

}

interface ProjectList{

}

interface ProjectListItem{

}