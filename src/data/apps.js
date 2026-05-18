const apps = [
    {
        id: 1,
        title: "Forest: Focus for Productivity",
        companyName: "Seekrtech",
        image: "https://i.ibb.co/placeholder/forest.png",
        description: "Forest is a focus app using the Pomodoro technique to help you stay productive. Plant a virtual tree and watch it grow as you focus. If you leave the app, your tree dies. A unique gamified approach to productivity that also helps plant real trees around the world.",
        size: 45,
        reviews: 54200,
        ratingAvg: 4.8,
        downloads: 9000000,
        ratings: [
            { name: "1 star", count: 200 },
            { name: "2 star", count: 400 },
            { name: "3 star", count: 1200 },
            { name: "4 star", count: 8000 },
            { name: "5 star", count: 44400 }
        ]
    },
    {
        id: 2,
        title: "SmPlan: ToDo List with Reminder",
        companyName: "productive.io",
        image: "https://i.ibb.co/placeholder/smplan.png",
        description: "SmPlan is a powerful task manager with smart reminders. Organize your daily tasks, set priorities, and never miss a deadline. Features include recurring tasks, widgets, and calendar sync for a complete productivity solution.",
        size: 28,
        reviews: 32100,
        ratingAvg: 4.7,
        downloads: 7000000,
        ratings: [
            { name: "1 star", count: 150 },
            { name: "2 star", count: 300 },
            { name: "3 star", count: 900 },
            { name: "4 star", count: 6000 },
            { name: "5 star", count: 24750 }
        ]
    },
    {
        id: 3,
        title: "FLIP - Focus Timer for Study",
        companyName: "FLIP Inc.",
        image: "https://i.ibb.co/placeholder/flip.png",
        description: "FLIP turns your phone face down to start a focus timer. The moment you flip your phone over, it stops. Simple and effective. Perfect for students and professionals who need distraction-free study or work sessions.",
        size: 32,
        reviews: 41500,
        ratingAvg: 4.6,
        downloads: 8500000,
        ratings: [
            { name: "1 star", count: 180 },
            { name: "2 star", count: 350 },
            { name: "3 star", count: 1100 },
            { name: "4 star", count: 7500 },
            { name: "5 star", count: 32370 }
        ]
    },
    {
        id: 4,
        title: "Pomocat - Cute Pomodoro Timer",
        companyName: "Pomocat Studio",
        image: "https://i.ibb.co/placeholder/pomocat.png",
        description: "Pomocat is an adorable Pomodoro timer featuring a cute cat companion that reacts to your focus sessions. Stay motivated with animations, streaks, and rewards while following the Pomodoro technique for maximum productivity.",
        size: 38,
        reviews: 28700,
        ratingAvg: 4.9,
        downloads: 5000000,
        ratings: [
            { name: "1 star", count: 100 },
            { name: "2 star", count: 200 },
            { name: "3 star", count: 700 },
            { name: "4 star", count: 5000 },
            { name: "5 star", count: 22700 }
        ]
    },
    {
        id: 5,
        title: "Time Planner: Schedule & Tasks",
        companyName: "Time Planner Co.",
        image: "https://i.ibb.co/placeholder/timeplanner.png",
        description: "Time Planner combines a daily planner, task manager, and time tracker in one app. Visualize your day with hourly blocks, track time spent on activities, and analyze your productivity patterns with detailed reports.",
        size: 52,
        reviews: 19300,
        ratingAvg: 4.5,
        downloads: 6000000,
        ratings: [
            { name: "1 star", count: 130 },
            { name: "2 star", count: 270 },
            { name: "3 star", count: 800 },
            { name: "4 star", count: 4500 },
            { name: "5 star", count: 13600 }
        ]
    },
    {
        id: 6,
        title: "Morning Habits - Daily Routine",
        companyName: "Habit Labs",
        image: "https://i.ibb.co/placeholder/morninghabits.png",
        description: "Build powerful morning routines with Morning Habits. Track daily habits, set streaks, and build consistency over time. The app uses behavioral science to help you stick to your goals and transform your mornings.",
        size: 29,
        reviews: 22800,
        ratingAvg: 4.7,
        downloads: 4500000,
        ratings: [
            { name: "1 star", count: 110 },
            { name: "2 star", count: 220 },
            { name: "3 star", count: 670 },
            { name: "4 star", count: 4200 },
            { name: "5 star", count: 17600 }
        ]
    },
    {
        id: 7,
        title: "Focus Plant: Pomodoro Forest",
        companyName: "Focus Plant Dev",
        image: "https://i.ibb.co/placeholder/focusplant.png",
        description: "Focus Plant lets you grow a virtual garden by staying focused. Each completed Pomodoro session helps your plants grow. Lose focus and your plants wither. A beautiful and motivating way to build deep work habits.",
        size: 41,
        reviews: 31600,
        ratingAvg: 4.8,
        downloads: 7500000,
        ratings: [
            { name: "1 star", count: 160 },
            { name: "2 star", count: 320 },
            { name: "3 star", count: 960 },
            { name: "4 star", count: 6000 },
            { name: "5 star", count: 24160 }
        ]
    },
    {
        id: 8,
        title: "Alarmy - Alarm Clock & Sleep",
        companyName: "Alarmy Inc.",
        image: "https://i.ibb.co/placeholder/alarmy.png",
        description: "Alarmy is the world's most annoying alarm clock — in a good way. To dismiss the alarm, you must complete missions like taking a photo, solving math problems, or shaking your phone. Never oversleep again.",
        size: 67,
        reviews: 89400,
        ratingAvg: 4.6,
        downloads: 12000000,
        ratings: [
            { name: "1 star", count: 400 },
            { name: "2 star", count: 800 },
            { name: "3 star", count: 2400 },
            { name: "4 star", count: 16000 },
            { name: "5 star", count: 69800 }
        ]
    },
    {
        id: 9,
        title: "Todoist: To-Do List & Planner",
        companyName: "Doist Inc.",
        image: "https://i.ibb.co/placeholder/todoist.png",
        description: "Todoist is one of the most popular task managers in the world. Organize tasks with projects, labels, filters, and priorities. Works across all devices and integrates with tools like Google Calendar, Slack, and more.",
        size: 58,
        reviews: 124000,
        ratingAvg: 4.8,
        downloads: 20000000,
        ratings: [
            { name: "1 star", count: 500 },
            { name: "2 star", count: 1000 },
            { name: "3 star", count: 3000 },
            { name: "4 star", count: 20000 },
            { name: "5 star", count: 99500 }
        ]
    },
    {
        id: 10,
        title: "Notion - Notes & Docs",
        companyName: "Notion Labs",
        image: "https://i.ibb.co/placeholder/notion.png",
        description: "Notion is an all-in-one workspace for notes, docs, wikis, and project management. Create custom databases, kanban boards, and calendars. Perfect for individuals and teams looking for a flexible productivity system.",
        size: 94,
        reviews: 210000,
        ratingAvg: 4.7,
        downloads: 25000000,
        ratings: [
            { name: "1 star", count: 800 },
            { name: "2 star", count: 1600 },
            { name: "3 star", count: 4800 },
            { name: "4 star", count: 40000 },
            { name: "5 star", count: 162800 }
        ]
    },
    {
        id: 11,
        title: "Headspace: Meditation & Sleep",
        companyName: "Headspace Inc.",
        image: "https://i.ibb.co/placeholder/headspace.png",
        description: "Headspace offers guided meditation, sleep sounds, and mindfulness exercises. Reduce stress, improve focus, and sleep better with science-backed techniques. Perfect for beginners and experienced meditators alike.",
        size: 76,
        reviews: 98500,
        ratingAvg: 4.9,
        downloads: 15000000,
        ratings: [
            { name: "1 star", count: 300 },
            { name: "2 star", count: 600 },
            { name: "3 star", count: 1800 },
            { name: "4 star", count: 18000 },
            { name: "5 star", count: 77800 }
        ]
    },
    {
        id: 12,
        title: "Habitica: Gamify Your Tasks",
        companyName: "HabitRPG Inc.",
        image: "https://i.ibb.co/placeholder/habitica.png",
        description: "Habitica turns your real-life tasks and habits into a role-playing game. Earn experience points, level up your character, and battle monsters by completing your goals. The most fun way to build productive habits.",
        size: 83,
        reviews: 67200,
        ratingAvg: 4.6,
        downloads: 10000000,
        ratings: [
            { name: "1 star", count: 280 },
            { name: "2 star", count: 560 },
            { name: "3 star", count: 1680 },
            { name: "4 star", count: 12000 },
            { name: "5 star", count: 52680 }
        ]
    }
];

export default apps;