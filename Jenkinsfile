pipeline {
    agent none
    stages {
        stage('Build - MongoDB') {
            agent { docker { 
                        image 'mongodb/mongodb-community-server:latest' 
                        args '-p 27017:27017 --name mongo'
                } }
            steps {
                sh 'mongod --version'
            }
        }
        stage('Build and Test App') {
            agent { docker { image 'node:20.11.1-alpine3.19' } }
            steps {
                sh 'node --version'
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
