// Methods in this file modifies the Queue component state

const log = console.log;

// Function to add a student, needs to be exported
export const addStudent = queue => {
  log("adding student");
  const studentList = queue.state.students;

  const student = {
    name: queue.state.studentName,
    course: queue.state.studentCourse
  };

  // Adding at a particular position
  const position = parseInt(queue.state.position);

  if (position > studentList.length || !position) {
    log("here");
    studentList.push(student);
  } else {
    log("here2");
    studentList.splice(position - 1, 0, student);
  }

  queue.setState({
    students: studentList
  });
};


export const Review = function (productID, description, review, username,
                       comments, imgSrc, approvalStatus){
    this.productID = productID
    this.description = description
    this.review = review
    this.username = username
    // array of comment object
    this.comments = comments 
    this.imgSrc = imgSrc
    // boolean
    this.approvalStatus = approvalStatus 
}


// date is a Date object
export const comment = function(username, productID, content, date, flagged){
  this.username = username
  this.productID = productID
  this.content = content
  this.date = date
  this.flagged = flagged
}

export const user = function(username, password, Email, type, comments, reviews){
  this.username = username
  this.password = password
  this.Email = Email
  this.type = type
  this.comments = comments
  this.reviews = reviews
}

export const removeComment = (queue, comment) => {
  //log(student)

  // filters out the student we don't want.
  console.log(queue)
  const filteredComments = queue.state.comments.filter(s => {
    return s !== comment;
  });

  //log(filteredStudents)
 queue.setState({
    comments: filteredComments
  });
 
};


export const removeStudent = (user, comment) => {
}
