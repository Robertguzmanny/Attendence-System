import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore , collection, getDocs, getDoc , setDoc, doc } from "firebase/firestore";

interface classSection//this is a prototype for the objects we will be storing in the 'classes' collection
{
  instructorEmail:string;//name of instructor
  instructorName:string;
  className:string;//name of the class
  semester:string;
  classSection:string;
  students:{studentName:string,studentId:string,hasDefaulted:boolean,attendance:{state:string,date:Date}[]}[];
  /*an array of students. each student has a name and id like the instructors. hasDefaulted is true/false and indicates default status. the attendance array
  contains numbers, 1 = present, 2 = absent, 3 = excused.*/
}

interface instructor
{
 name:string;
 email:string;
 password:string;
}

interface student
{
  studentName:string;
  studentId:string; 
  classes:{className:string,semester:string,hasDefaulted:boolean,attendance:{status:string,date:Date}[],section:number}[];/* an array of objects, each of which represents a 
  a class the student is taking or has taken. there is an attendance array for each class*/
}
interface studentAddClass
  {studentName:string;
    studentId:number; 
  }

//Firebase configuration
const app = initializeApp(  
  {
  apiKey: "AIzaSyBPQrYj4WBxCdlacBxXrqz6p3db3n00MNY",
  authDomain: "attendencesystem-b67f0.firebaseapp.com",
  projectId: "attendencesystem-b67f0",
  storageBucket: "attendencesystem-b67f0.appspot.com",
  messagingSenderId: "605019644295",
  appId: "1:605019644295:web:982a74f26f73131102f322"
});

const db = getFirestore();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit{

  @ViewChild('selectItem',{read:ElementRef}) selectItem:ElementRef;

  authorized:boolean = false;//initially access is denied. once authenticated, this will be set to true and user will proceed to main app
  classes:classSection[];//this array stores the working set of classes that you d/l from firebase.
  students:student[];//this array stores the working set of students that you d/l from firebase.
  clearInputs(input:any[]):void{for(let i of input){i.value = '';}}
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  openModal(){this.modalIsOpen = true}
  closeModal(){this.modalIsOpen = false}
  modalIsOpen:boolean = false;
  setConsole(str:string){this.consoleHistory.unshift(str)}
  consoleHistory:string[] = ['sample expression: student chris jeffries has been present 100% during the date range 11/11/2021-12/11/2021',
                             'sample expression: student chris jeffries has been present 100% during the date range 11/11/2021-12/11/2021',
                             'sample expression: student chris jeffries has been present 100% during the date range 11/11/2021-12/11/2021'
                            ];
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  addStudentData:{studentName:string,studentId:string} = {studentName:'',studentId:''};
  setAddStudentName(name:string):void{ this.addStudentData.studentName = name.toLowerCase(); }//set student name
  setAddStudentId(id:string):void{ this.addStudentData.studentId = id.toLowerCase(); }// set student id
  addStudent(StudentData):void//add student record to frebase, only if it does not yet exist. 
  {
    if(StudentData.studentId === '' || StudentData.studentName === ''){return}
    else
    //YOUR CODE HERE............
    return;
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  studentAnalytics:number;
  setStudentAnalytics(data:number):void{this.studentAnalytics = data}
  studentAttendenceData:{studentId:string,startDate:Date,endDate:Date} = {studentId: '',startDate:undefined,endDate:undefined} ;//represents student id
  setStudentAttendanceId(id:string){ this.studentAttendenceData.studentId = id.toLowerCase() }//set student id
  setStudentAttendanceStartDate(date:string)
  {
    let dateComponents:string[] = date.split('/');
    this.studentAttendenceData.startDate = new Date(parseInt(dateComponents[2]),parseInt(dateComponents[1])-1,parseInt(dateComponents[0]));
  }
  setStudentAttendanceEndDate(date:string)
  {
    let dateComponents:string[] = date.split('/');
    this.studentAttendenceData.endDate = new Date(parseInt(dateComponents[2]),parseInt(dateComponents[1])-1,parseInt(dateComponents[0]));
  }
  getStudentAttendence(studentid:{studentId:string,startDate:Date,endDate:Date}):void//get student record from firebase and calculate attendence 
  {
    if(studentid.studentId === ''){return}
    else
    //YOUR CODE HERE............
    return;
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  studentIds:string[] = [];
  setStudentIds(studentid:string,ref:any)
  {
    if(studentid.length < 10 ){return}
    this.studentIds.unshift(studentid.toLowerCase()); 
    ref.value = '';
  }

  
  addClassData:any = {instructorEmail:'', className:'',classSection:-1,semester:'',studentIds:[]};
  setAddClassName(name:string):void{ this.addClassData.className = name.toLowerCase(); }
  setAddClassSection(section:string):void{ this.addClassData.classSection = section.toLowerCase(); }
  setAddClassEmail(email:string):void{ this.addClassData.instructorEmail = email.toLowerCase(); }
  setAddClassSemester(semester:string):void{ this.addClassData.semester = semester.toLowerCase(); }
  setAddClassStudents(students:string[],input:any):void{ this.addClassData.studentIds = students; this.studentIds = [];}
  parseStudents(students:string):studentAddClass[]{
    
  const stu = students.split(",");
    return stu.map  (function (studentRepresentation){
    const stuRep = studentRepresentation.split(":");
    return {studentName: stuRep?.[0], studentId:parseInt(stuRep?.[1])};
  }

  )
     
    // interface student
    // {
    //   studentName:string;
    //   studentId:string;
    //   classes:{className:string,semester:string,hasDefaulted:boolean,attendance:{status:string,date:Date}[],section:number}[];/* an array of objects, each of which represents a 
    //   a class the student is taking or has taken. there is an attendance array for each class*/
    // }

  } //123456798, 13245679, 1324567
  //returns an array of student ids and names from the students input in 'add class'. to do this it relies on regular expressions
  addClass(classdata:any):void//add class record to firebase, only if it does not yet exist. 
  {
    if(classdata.className === '' || classdata.classSection === -1 || classdata.semester === '' || 
    classdata.instructorEmail ===''){return}
    else
    {
      //const studentArray:{studentName:string,studentId:number}[] = this.parseStudents(this.addClassData.students);// this array contains the student id's. this is what you add to firebase
      //YOUR CODE HERE............
      return;
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  classAnalytics:number;
  setClassAnalytics(data:number):void{this.classAnalytics = data}
  classAttendenceData:{className:string,section:string,semester:string,startDate:Date,endDate:Date} = {className:'',section:'',semester:'',startDate:undefined,endDate:undefined};
  setClassAttendenceName(name:string):void{ this.classAttendenceData.className = name.toLowerCase() }
  setClassAttendenceSection(section:string):void{ this.classAttendenceData.section = section.toLowerCase() }
  setClassAttendanceStartDate(date:string)
  {
    let dateComponents:string[] = date.split('/');
    this.classAttendenceData.startDate = new Date(parseInt(dateComponents[2]),parseInt(dateComponents[1])-1,parseInt(dateComponents[0]));
  }
  setClassAttendanceEndDate(date:string)
  {
    let dateComponents:string[] = date.split('/');
    this.classAttendenceData.endDate = new Date(parseInt(dateComponents[2]),parseInt(dateComponents[1])-1,parseInt(dateComponents[0]));
  }
  setClassAttendenceSemester(semester:string):void{ this.classAttendenceData.semester = semester.toLowerCase() }
  getClassAttendence(attendencedata:any):void//retrieve class record from firebase and compute attendence 
  {
    if(attendencedata.className === '' || attendencedata.section === '' || attendencedata.semester === ''){return}
    else
    //YOUR CODE HERE............
    return;
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  addInstructorData:{instructorEmail:string,password:string} = {instructorEmail:'',password:''};
  setAddInstructorEmail(email:string):void{ this.addInstructorData.instructorEmail = email }
  setAddInstructorPassword(password:string):void{ this.addInstructorData.password = password }
  addInstructor(instructor:any):void//add login for instructor using firebase:auth(email+password login account) 
  {
    if(instructor.instructorEmail === '' || instructor.password === ''){return}
    else
    //YOUR CODE HERE............
    return;
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async getClassesCollection():Promise<classSection[]>//read all classes from firebase
  {
    let returnArray:classSection[] = new Array();
    const query = await getDocs(collection(db,'classes'));
    return new Promise<classSection[]>((resolve,reject) =>
                  {
                    if(query.size < 1){reject("collection 'classes' is empty")}
                    else{
                          for(let i=0;i<query.size;i++){ returnArray.push(query.docs[i].data() as classSection); }
                          resolve(returnArray);
                        }
                  });
  }

  async getStudentsCollection():Promise<student[]>//read all students from firebase
  {
    let returnArray:student[] = new Array();
    const query = await getDocs(collection(db,'students'));
    return new Promise<student[]>((resolve,reject) =>
                  {
                    if(query.size < 1){reject("collection 'students' is empty")}
                    else{
                          for(let i=0;i<query.size;i++){ returnArray.push(query.docs[i].data() as student); }
                          resolve(returnArray);
                        }
                  });
  }

  async addStudentToDb(student:student):Promise<string>//add a student to firebase
  {
    let success:boolean = true;
    try{ const docRef = await setDoc(doc(db,'students',student.studentId),student); }
    catch{ success = false; }
    return new Promise<string>((resolve,reject) => { if(success === true){ resolve("added "+student.studentName+" to 'students'") }else{ reject("FAILED: couldn't write to database") } });
  }

  async addClassToDb(currentClass:classSection):Promise<string>//add a class to firebase
  {
    let success:boolean = true;
    try{ const docRef = await setDoc(doc(db,'classes',(currentClass.className+currentClass.classSection+currentClass.semester)),currentClass); }
    catch{ success = false; }
    return new Promise<string>((resolve,reject) => { if(success === true){ resolve("added "+currentClass.className+" to 'classes'") }else{ reject("FAILED: couldn't write to database") } });
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  constructor(){}

  ngAfterViewInit(){}
}