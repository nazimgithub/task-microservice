const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskname: String,
    description: String,
    duedate: Date,
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High', 'Critical'],
        default: 'Medium',
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'completed', 'pending', 'cancelled', 'rejected', 'assigned'],
        default: 'active',
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
},
{ timestamps: true }
);

taskSchema.pre('save', async function (next) {
    next();
});

module.exports = mongoose.model('Task', taskSchema);
