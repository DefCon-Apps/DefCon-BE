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

    name: String,
    profileImage: String,

    history: Array<MemberHistoryData>
}

interface MemberHistoryData{
    date: String,
    content: String
}

interface MemberList{

}

interface MemberListItem{

}

interface ProjectData{

}

interface ProjectList{

}

interface ProjectListItem{

}