pipeline {
    agent none
    stages {
        stage('Build - MongoDB n Test') {
            agent { docker { image 'node:20.11.1-alpine3.19' } }
            steps {
                sh 'node --version'
                sh 'docker run -p 27017:27017 --name mongo -d mongodb/mongodb-community-server:latest'
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
