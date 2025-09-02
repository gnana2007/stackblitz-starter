const mongoose = require("mongoose");

const studentSchema= new mongoose.Schema({
name:{
  type: String,
  required: true
  },
email:{

  type: String,
  required: true,
  unique: true
},
enrollmentDate:{

   type: Date,
   default: Date.now
},
 courses:{

  type: mongoose.Schema.Types.ObjectId
  ref: 'Course'
}
})

const courseSchema = new mongoose.Schema({


title:{

  type: String,
  required: true
},
  

description:{

  type: String
},


durationWeeks:{

  type: Number,
  required: true
},


instructor:{

  type: String,
  required: true
}
});

const student = mongoose.Model("student", studentSchema);
const course = mongoose.Model("course" , courseSchema);
module.exports(student , course);
