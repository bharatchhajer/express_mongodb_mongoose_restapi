pipeline {
    agent none
    stages {
        stage('Build - DinD') {
            agent any 
            steps {
                sh 'docker network rm exp-mango-network'
                sh 'docker network create exp-mango-network'
            }
        }
        stage('Build - MongoDB') {
            agent { docker { 
                        image 'mongodb/mongodb-community-server:latest' 
                        args '-p 27017:27017 --name mongo --network exp-mango-network -d'
                } }
            steps {
                sh 'mongod --version'
            }
        }
        stage('Build and Test App') {
            agent { docker { 
                        image 'node:20.11.1-alpine3.19' 
                        args '--network exp-mango-network'
            } }
            steps {
                sh 'node --version'
                sh 'npm install'
                sh 'export NODE_ENV=test'
                sh 'npm test'
            }
        }
    }
}
