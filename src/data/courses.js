export const courses = [
    {'id':'1', 'name':'Algorithms','progress':'0'},
    {'id':'2', 'name':'Data Structures','progress':'0'},
    {'id':'3', 'name':'Operating System','progress':'0'}
]

export const course_content = [
        {'id':'1', 'name': 'Algorithms', 'description': 'Algorithms used in CS','instructor_details':'','lessons':[
            {'id': '1','name':'Lesson 1 - Sorting 1', 'progress':'55'},
            {'id': '2','name':'Lesson 2 - Sorting 2', 'progress':'65'},
            {'id': '3','name':'Lesson 3 - Search', 'progress':'75'}
        ]
    },
        {'id':'2', 'name': 'Data structures', 'description': 'In computer science, a data structure is a data organization, management, and storage format that is usually chosen for efficient access to data. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data, i.e., it is an algebraic structure about data.','instructor_details':'','lessons':[
            {'id': '4','name':'Lesson 1 - Stacks', 'progress':'0'},
            {'id': '5','name':'Lesson 2 - Queues', 'progress':'0'},
            {'id': '6','name':'Lesson 3 - Heaps', 'progress':'0'},
            {'id': '7','name':'Lesson 4 - Tries', 'progress':'0'},
            {'id': '8','name':'Lesson 5 - Maps', 'progress':'0'},
        ]
    },
]

export const lesson_content = [
    {'id': '1','progress':'0', 'video_url': 'https://www.youtube.com/watch?v=KInG04mAjO0', 'next_id':'2', 'quiz':[
        {
            questionText: 'What is the time complexity of peek operation?',
            answerOptions: [
                { answerText: 'O(n)', isCorrect: false },
                { answerText: 'O(n^2)', isCorrect: false },
                { answerText: 'O(1)', isCorrect: true },
                { answerText: 'O(2n)', isCorrect: false },
            ],
        },
        {
            questionText: 'Balance Parenthesis can be solved using which data structure?',
            answerOptions: [
                { answerText: 'Queue', isCorrect: false },
                { answerText: 'Stack', isCorrect: true },
                { answerText: 'Array', isCorrect: false },
                { answerText: 'Map', isCorrect: false },
            ],
        }
    ], 'quizPassed':'false', 'additional resources':[]},
    {'id': '2','progress':'0', 'video_url': 'https://www.youtube.com/watch?v=KInG04mAjO0', 'next_id':'3', 'quiz':[
        {
            questionText: 'What is the time complexity of peek operation?',
            answerOptions: [
                { answerText: 'O(n)', isCorrect: false },
                { answerText: 'O(n^2)', isCorrect: false },
                { answerText: 'O(1)', isCorrect: true },
                { answerText: 'O(2n)', isCorrect: false },
            ],
        },
        {
            questionText: 'Balance Parenthesis can be solved using which data structure?',
            answerOptions: [
                { answerText: 'Queue', isCorrect: false },
                { answerText: 'Stack', isCorrect: true },
                { answerText: 'Array', isCorrect: false },
                { answerText: 'Map', isCorrect: false },
            ],
        }
    ], 'quizPassed':'false', 'additional resources':[]},
    {'id': '3','progress':'0', 'video_url': 'https://www.youtube.com/watch?v=KInG04mAjO0', 'next_id':'NULL', 'quiz':[
        {
            questionText: 'What is the time complexity of peek operation?',
            answerOptions: [
                { answerText: 'O(n)', isCorrect: false },
                { answerText: 'O(n^2)', isCorrect: false },
                { answerText: 'O(1)', isCorrect: true },
                { answerText: 'O(2n)', isCorrect: false },
            ],
        },
        {
            questionText: 'Balance Parenthesis can be solved using which data structure?',
            answerOptions: [
                { answerText: 'Queue', isCorrect: false },
                { answerText: 'Stack', isCorrect: true },
                { answerText: 'Array', isCorrect: false },
                { answerText: 'Map', isCorrect: false },
            ],
        }
    ], 'quizPassed':'false', 'additional resources':[]},
    {'id': '4','progress':'0', 'video_url': 'https://www.youtube.com/watch?v=KInG04mAjO0', 'next_id':'5', 'quiz':[
        {
            questionText: 'What is the time complexity of peek operation?',
            answerOptions: [
                { answerText: 'O(n)', isCorrect: false },
                { answerText: 'O(n^2)', isCorrect: false },
                { answerText: 'O(1)', isCorrect: true },
                { answerText: 'O(2n)', isCorrect: false },
            ],
        },
        {
            questionText: 'Balance Parenthesis can be solved using which data structure?',
            answerOptions: [
                { answerText: 'Queue', isCorrect: false },
                { answerText: 'Stack', isCorrect: true },
                { answerText: 'Array', isCorrect: false },
                { answerText: 'Map', isCorrect: false },
            ],
        }
    ], 'quizPassed':'false', 'additional resources':[]},
    {'id': '5','progress':'0', 'video_url': 'https://www.youtube.com/watch?v=nqXaPZi99JI', 'next_id':'6', 'quiz':[
        {
            questionText: 'What is the time complexity of push operation?',
            answerOptions: [
                { answerText: 'O(n)', isCorrect: false },
                { answerText: 'O(n^2)', isCorrect: false },
                { answerText: 'O(1)', isCorrect: true },
                { answerText: 'O(2n)', isCorrect: false },
            ],
        },
        {
            questionText: 'Queue works on which principle?',
            answerOptions: [
                { answerText: 'LIFO', isCorrect: false },
                { answerText: 'FIFO', isCorrect: true },
                { answerText: 'SIFO', isCorrect: false },
                { answerText: 'TIFO', isCorrect: false },
            ],
        }
    ], 'quizPassed':'false', 'additional resources':[]},
    {'id': '6','progress':'0', 'video_url': 'https://www.youtube.com/watch?v=t0Cq6tVNRBA', 'next_id':'7', 'quiz':[
        {
            questionText: 'What is the time complexity of getMin() operation?',
            answerOptions: [
                { answerText: 'O(n)', isCorrect: false },
                { answerText: 'O(n^2)', isCorrect: false },
                { answerText: 'O(1)', isCorrect: true },
                { answerText: 'O(2n)', isCorrect: false },
            ],
        },
        {
            questionText: 'What is the time complexity of insert operation in a heap?',
            answerOptions: [
                { answerText: 'O(n)', isCorrect: false },
                { answerText: 'O(logn)', isCorrect: true },
                { answerText: 'O(1)', isCorrect: false },
                { answerText: 'O(2n)', isCorrect: false },
            ],
        }
    ], 'quizPassed':'false', 'additional resources':[]},
    {'id': '7','progress':'0', 'video_url': 'https://www.youtube.com/watch?v=zIjfhVPRZCg', 'next_id':'8', 'quiz':[
        {
            questionText: 'What is the time complexity of search operation?',
            answerOptions: [
                { answerText: 'O(n)', isCorrect: false },
                { answerText: 'O(n^2)', isCorrect: false },
                { answerText: 'O(1)', isCorrect: true },
                { answerText: 'O(2n)', isCorrect: false },
            ],
        },
        {
            questionText: 'Phone directory can be implemented using which data structure?',
            answerOptions: [
                { answerText: 'Queue', isCorrect: false },
                { answerText: 'Trie', isCorrect: true },
                { answerText: 'Array', isCorrect: false },
                { answerText: 'Map', isCorrect: false },
            ],
        }
    ], 'quizPassed':'false', 'additional resources':[]},
    {'id': '8','progress':'0', 'video_url': 'https://www.youtube.com/watch?v=shs0KM3wKv8', 'next_id':'NULL', 'quiz':[
        {
            questionText: 'What is the time complexity of insert operation?',
            answerOptions: [
                { answerText: 'O(n)', isCorrect: false },
                { answerText: 'O(n^2)', isCorrect: false },
                { answerText: 'O(logn)', isCorrect: true },
                { answerText: 'O(1)', isCorrect: false },
            ],
        },
        {
            questionText: 'What is the time complexity of search in a map?',
            answerOptions: [
                { answerText: 'O(1)', isCorrect: false },
                { answerText: 'O(logn)', isCorrect: true },
                { answerText: 'O(n)', isCorrect: false },
                { answerText: 'O(2n)', isCorrect: false },
            ],
        }
    ], 'quizPassed':'false', 'additional resources':[]}
]
