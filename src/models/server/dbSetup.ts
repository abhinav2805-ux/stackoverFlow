import { db } from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";

import { databases } from "./config";

export default async function getOrCreateDB(){
    try{
        await databases.get(db);
        console.log("Database connection")
    }catch(error){
        try{
            await databases.create(db,db)
            console.log("database Created")
            // create collections
            await Promise.all([
        createQuestionCollection(),
        createAnswerCollection(),
        createCommentCollection(),
        createVoteCollection(),

            ])
            console.log("collection created")
            console.log("Database connected")
        }catch(error){
            console.log("Error creating database or collections",error)
        }
    }
    
    return databases;

}