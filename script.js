const questionBank = [
    {
      question: 'Which of the following is a high-level programming language?',
      options: [' Machine Code', ' Assembly Language', ' C++', ' Binary Code'],
      correctAnswer: 2 
    },
    {
      question: 'What does HTML stand for?',
      options: [' Hyper Transfer Markup Language', ' Hyper Text Markup Language', ' Hyperlinks and Text Markup Language', ' High-level Text Markup Language'],
      correctAnswer: 1 
    },
    {
      question: ' Which data structure follows the Last In, First Out (LIFO) principle?',
      options: [' Queue', ' Stack', ' Array', ' Linked List'],
      correctAnswer: 1 
    },
    {
      question: 'What is the process of converting a high-level programming language to machine code called?',
      options: [' Linking', ' Interpreting', ' Compiling', ' Debugging'],
      correctAnswer: 2 
    },
    {
      question: ' Which sorting algorithm has the best time complexity in the worst-case scenario?',
      options: [' Bubble Sort', ' Quick Sort', ' Merge Sort', ' Insertion Sort'],
      correctAnswer: 2 
    },
    {
      question: 'What is the size of an integer data type in C programming language in 32-bit systems?',
      options: [' 2 bytes', ' 4 bytes', ' 8 bytes', ' Depends on the compiler'],
      correctAnswer: 1 
    },
    {
      question: 'Which protocol is used for secure communication over a computer network?',
      options: [' FTP', ' HTTP', ' HTTPS', ' SMTP'],
      correctAnswer: 2 
    },
    {
      question: 'Which of the following is an example of a non-volatile memory?',
      options: [' RAM', ' ROM', ' Cache memory', ' Virtual memory'],
      correctAnswer: 1 
    },
    {
      question: 'In object-oriented programming, what term is used to describe hiding the internal implementation of an object and only exposing the necessary functionalities?',
      options: [' Abstraction', ' Inheritance', ' Encapsulation', ' Polymorphism'],
      correctAnswer: 2 
    },
    {
      question: ' Which of the following is not a cloud computing service model?',
      options: [' Infrastructure as a Service (IaaS)', ' Platform as a Service (PaaS)', ' Software as a Service (SaaS)', ' Database as a Service (DBaaS)'],
      correctAnswer: 3 
    },
    {
      question: 'Which sorting algorithm is known for its ability to sort a partially sorted array in nearly linear time?',
      options: [' Heap Sort', ' Insertion Sort', ' Quick Sort', ' Bubble Sort'],
      correctAnswer: 1 
    },
    {
      question: ' Which programming paradigm promotes using a collection of objects that communicate via messages?',
      options: [' Procedural programming', ' Functional programming', ' Object-oriented programming', 'Logical programming'],
      correctAnswer: 2 
    },
    {
      question: 'What is the function of a compiler?',
      options: [' Converts high-level code to machine code', ' Executes machine code directly', ' Optimizes code for faster execution', ' Provides an interface for programming'],
      correctAnswer: 0 
    },
    {
      question: 'Which OSI model layer is responsible for establishing, maintaining, and terminating connections between nodes?',
      options: [' Data Link Layer', ' Transport Layer', ' Network Layer', ' Session Layer'],
      correctAnswer: 3 
    },
    {
      question: ' Which of the following is a relational database management system?',
      options: [ ' MongoDB', ' MySQL', ' Cassandra', ' Redis'],
      correctAnswer: 1 
    },
    {
      question: 'Which data structure uses First In, First Out (FIFO) order?',
      options: [' Stack', ' Tree', ' Queue', ' Linked List'],
      correctAnswer: 2 
    },
    {
      question: ' In object-oriented programming, what is a blueprint for creating objects called?',
      options: [' Class', ' Object', ' Method', ' Instance'],
      correctAnswer: 0 
    },
    {
      question: 'What does SQL stand for?',
      options: [' Structured Query Language', ' Sequential Query Language', ' Standard Query Language', ' Statistical Query Language'],
      correctAnswer: 0 
    },
    {
      question: 'Which of the following is an example of a network topological design?',
      options: [' Bus', ' Ring', ' Star', ' All of the above'],
      correctAnswer: 3 
    },
    {
      question: ' Which algorithm is used for traversing or searching tree or graph data structures?',
      options: [' BFS (Breadth-First Search)', ' DFS (Depth-First Search)', " Dijkstra's Algorithm", " Prim's Algorithm"],
      correctAnswer: 0 
    },
    
    
  ];
  
  const questionsContainer = document.getElementById('questions');
  const submitBtn = document.getElementById('submitBtn');
  const nextBtn= document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const timer = document.getElementById('timer');
  
 
  let currentQuestionIndex = 0;
  let randomizedQuestions = [];

  document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.querySelector('.wrapper');
  const checkbox = document.getElementById('check');

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      wrapper.classList.add('minimize');
    } else {
      wrapper.classList.remove('minimize');
    }
  });
});

  
  function displayCurrentQuestion() {
    const currentQuestion = randomizedQuestions[currentQuestionIndex];
    if (!currentQuestion) {
      console.error('Error: No question found at index', currentQuestionIndex);
      return;
    }
    
    console.log('Current question:', currentQuestion);
    
    let html = '';
    html += `<div>
      <p>${currentQuestionIndex + 1}. ${currentQuestion.question}</p>
      <ul>`;
    currentQuestion.options.forEach((opt, optIndex) => {
      html += `<li><input type="radio" name="question${currentQuestionIndex}" value="${optIndex}">${opt}</li>`;
    });
    html += `</ul>
      </div>`;
    
    questionsContainer.innerHTML = html;
  }
  

  function getRandomQuestions() {
    const availableQuestions = [...questionBank]; 
    const selectedQuestions = [];
    while (selectedQuestions.length < 5 && availableQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      const randomQuestion = availableQuestions.splice(randomIndex, 1)[0];
      selectedQuestions.push(randomQuestion);
    }
    return selectedQuestions;
  }


function startTimer() {
    const currentTime = Date.parse(new Date());
    const deadline = new Date(currentTime + time * 1000);
  
    function updateTimer() {
      const now = new Date();
      const timeLeft = deadline - now;
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      if (minutes === 0 && seconds === 0) {
        clearInterval(timerInterval);
        timer.textContent = '5:00';
        submitExam();
        return;
      }
  
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      timer.textContent = `${minutes}:${seconds}`;
  
      if (timeLeft < 0) {
        clearInterval(timerInterval);
        timer.textContent = 'Time up!';
        submitExam();
      }
    }
  
    updateTimer(); 
    timerInterval = setInterval(updateTimer, 1000);
  }
  


  const startBtn = document.getElementById('startBtn');
  const container = document.querySelector('.questionContainer');
  
  let time = 300; 
  let timerInterval;
  let timerRunning = false;
  

  function startExam() {
   
    startBtn.style.display = 'none';

    container.style.filter = 'none';
  
    if (!timerRunning) {
      startTimer();
      timerRunning = true;
    }
  }
  
  startBtn.addEventListener('click', startExam);
  
  
  
  function submitExam() {
    clearInterval(timerInterval); // Stop the timer
    
    alert('Thank you for submitting your responses!');
  

    window.location.reload();
  }
  
  

  

    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < questionBank.length - 1) {
        currentQuestionIndex++;
        displayCurrentQuestion();
        
        }
    });
  
 
  prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      displayCurrentQuestion();
      
    }
  });


submitBtn.addEventListener('click', submitExam);
  
 
 randomizedQuestions = getRandomQuestions(); 
 displayCurrentQuestion();
  
  
  