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

  type: Array,
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