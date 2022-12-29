import {FirebaseApp, FirebaseOptions, initializeApp} from "firebase/app";
import {collection, doc, Firestore, getDoc, getDocs, getFirestore} from "firebase/firestore";

import {API_DATA, MemberData, MemberList, ProjectData, ProjectList} from "./DataClass";

import dotenv from "dotenv";

dotenv.config();
const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    appId: process.env.FB_APP_ID
};

let firebaseApp: FirebaseApp;
let firebaseDB: Firestore;

export const initFirebase = () => {
    firebaseApp =  initializeApp(firebaseConfig);
    firebaseDB = getFirestore();
};

export const getMainEvent = async () => {
    return await getFirebaseDB("Common", "MainEvent");
};

const getFirebaseDB = async (collectionID: string, documentID: string) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = await getDoc(doc(firebaseDB, collectionID, documentID));
    if(!fbDocument.exists()){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    try{
        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        RESULT_DATA.RESULT_DATA = fbDocument.data();
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA;
};

const getFirebaseDBList = async (collectionID: string) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const isMemberList = (collectionID == "Members");

    const fbDocument = await getDocs(collection(firebaseDB, collectionID));
    if(fbDocument.empty){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    try{
        let RESULT_DATA_LIST: MemberList | ProjectList;

        let cntData = 0;
        let listMember: Array<MemberData> = [];
        let listProject: Array<ProjectData> = [];

        fbDocument.forEach((curDoc) => {
            cntData++;
            console.log(curDoc.id);
            if(isMemberList){
                // listMember.push({
                //     POST_AUTHOR: curDoc.get("POST_AUTHOR"),
                //     POST_DATE: curDoc.get("POST_DATE"),
                //     POST_ID: curDoc.id,
                //     POST_IMAGE: curDoc.get("POST_IMAGE"),
                //     POST_RECOMMEND: curDoc.get("POST_RECOMMEND"),
                //     POST_TITLE: curDoc.get("POST_TITLE")
                // });
            }else{
                listProject.push({
                    title: curDoc.get("title"),
                    content: curDoc.get("content"),
                    date: curDoc.get("date"),
                    image: curDoc.get("image"),
                    tech: curDoc.get("tech"),
                    user: curDoc.get("user")
                });
            }
        });

        if(isMemberList){
            RESULT_DATA_LIST = {
                count: cntData,
                data: listMember
            }
        }else{
            RESULT_DATA_LIST = {
                count: cntData,
                data: listProject
            }
        }

        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        RESULT_DATA.RESULT_DATA = RESULT_DATA_LIST;
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA;
};