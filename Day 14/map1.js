const tasks=[
    {
    "name" : "Task1",
    "Duration":120
    },
     {
    "name" : "Task2",
    "Duration":70
    },
     {
    "name" : "Task3",
    "Duration":80
    }
]
const mytasks=tasks.filter((task)=>task.duration>=80)
console.log(mytasks)