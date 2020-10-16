export const project = [
    {
        Category: "On going projects",
        Projects: [
            {
                title: "Smart Warehouse Manager",
                image: process.env.PUBLIC_URL + "/Assets/Projects/Ongoing/Smart Warehouse Manager.jpg",
                content: "A smart path following robot which manages the warehouse workload in optimum time. The robot has to decide the optimum path using path planning algorithms and deliver different objects at their respective drop off point. The bot will also avoid obstacles while traversing through the warehouse. The project can be further modified by using multiple robots that communicate with each other and choose their paths accordingly.  "
            },
            {
                title: "Smart UV Sanitizing Bot",
                image: process.env.PUBLIC_URL + "/Assets/Projects/Ongoing/Smart UV Sanitizing Bot.jpg",
                content: "In recent times, Covid-19 is spreading throughout the world. In such scenarios, sanitizing the environment manually has become a very tedious task. A smart navigating bot which will use UV Sanitization System to disinfect the entire working area can be a solution. The bot would autonomously traverse every corner in the arena by using optimum algorithms for obstacle avoidance and it would also sanitize different areas on its way."
            },
            {
                title: "Fire Safety Drone",
                image: process.env.PUBLIC_URL + "/Assets/Projects/Ongoing/Fire Safety Drone.png",
                content: "In factories, accidents due to fire are common and it spreads rapidly due to lack of a quick responsive system. Conventional spray extinguishers cause a lot of damage to electrical instruments .A fire safety drone that is smartly able to maneuver in a factory can be a solution. Fire would be detected through security cameras and its location would be sent to the drone. The Drone will be able to throw fire extinguisher balls into the fire from a safe distance with trajectory planning "
            },
        ]
    },
    {
        Category: "Completed projects",
        Projects: [
            {
                title: "Tone Encrypted Messaging",
                image: process.env.PUBLIC_URL + "/Assets/Projects/Completed/Tone Encryption.jpg",
                content: " Nowadays, many encrypted messaging systems can be easily hacked and the message can be decoded. Tone encrypted messaging system can be a creative way to solve this problem. It is a system which sends a message encoded into music tones, decodes the music tones and  gives back the original message back at the receiver end."
            },
            {
                title: "Line follower Robot using V-rep",
                image: process.env.PUBLIC_URL + "/Assets/Projects/Completed/Line following Robot.png",
                content: "For automation of mobile robots in fixed environments use of Line Following Robots is quite common. To practice the algorithms involved with controlling the line following robot, the model of the robot is implemented in Coppeliasim V-Rep Simulator. The key features of the robot include 90 degree turns and traversal through paths of different color. "
            },
        
            {
                title: "Image processing with Aruco markers",
                image: process.env.PUBLIC_URL + "/Assets/Projects/Completed/Image Processing.png",
                content: " Sometimes, It is very hard to detect the orientation and location of an object through a camera if the shape of the object is irregular. Aruco marker can be used to track and monitor the position and orientation of the object. We can also differentiate objects on the basis of information contained by different Aruco markers. The program running in the system processes the images and detects the orientation and location of the object with respect to the camera."
            },
        
            {
                title: "Data filtration and fusion in Octave",
                image: process.env.PUBLIC_URL + "/Assets/Projects/Completed/Data Filtration.png",
                content: "For estimating the position or orientation of an object we can not rely on only one sensor as every sensor is having some drawbacks. For better accuracy and reliability of data we generally need to fuse the data measured from more than one sensor. In this project, to detect the accurate orientation of an object the data from the accelerometer and gyroscope is fused."
            },
        ]
    }    
];
