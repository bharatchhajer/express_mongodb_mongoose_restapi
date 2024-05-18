pipeline {
    agent none
    stages {
        stage('Build - rm network') {
            agent any 
            steps {
                sh 'docker network rm exp-mango-network'
                sh 'docker network create exp-mango-network'
            }
        }
        stage('Build - add network') {
            agent any 
            steps {
                sh 'docker network create exp-mango-network'
            }
        }
        stage(){
            agent any
            steps {
                sh 'docker run -p 27017:27017 --name mongo --network exp-mango-network  -d mongodb/mongodb-community-server:latest'
                sh 'docker run -p 8080:3000 --name mongo-restapi --network exp-mango-network  bharatchhajer/express-mongodb-mongoose-restapi:1.0.0'
            }
        }
    }
}
