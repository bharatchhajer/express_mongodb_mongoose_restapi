pipeline {
    agent none
    stages {
        stage('Build n Test') {
            agent any 
            steps {
                sh 'docker network create exp-mango-network2'
                sh 'docker run -p 27017:27017 --name mongo --network exp-mango-network2  -d mongodb/mongodb-community-server:latest'
                sh 'docker run -p 8080:3000 --name mongo-restapi --network exp-mango-network2  bharatchhajer/express-mongodb-mongoose-restapi:1.0.0'            
            }
        }
    }
}
