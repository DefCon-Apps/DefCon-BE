import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { collection, doc, Firestore, getDoc, getDocs, getFirestore } from "firebase/firestore";

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

const getFirebaseDB = async (collectionID: string, documentID: string) => {
    const RESULT_DATA: any = {
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
    const RESULT_DATA: any = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = await getDocs(collection(firebaseDB, collectionID));
    if(fbDocument.empty){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    const POST_IS_NOTICE = (collectionID == "notice");

    try{
        let POST_COUNT = 0;
        let POST_LIST: Array<any> = [];

        fbDocument.forEach((curDoc) => {
            POST_COUNT++;
            POST_LIST.push({
                POST_AUTHOR: curDoc.get("POST_AUTHOR"),
                POST_DATE: curDoc.get("POST_DATE"),
                POST_ID: curDoc.id,
                POST_IMAGE: curDoc.get("POST_IMAGE"),
                POST_RECOMMEND: curDoc.get("POST_RECOMMEND"),
                POST_TITLE: curDoc.get("POST_TITLE")
            })
        })

        POST_LIST.reverse();

        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        RESULT_DATA.RESULT_DATA = {
            POST_COUNT: POST_COUNT,
            POST_IS_NOTICE: POST_IS_NOTICE,
            POST_LIST: POST_LIST
        }
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA;
};