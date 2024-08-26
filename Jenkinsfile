pipeline {
    agent any
    tools {
        nodejs 'NodeJS 22' 
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'
                    bat 'npx cypress install'
                    bat 'npm install -g browserstack-cypress-cli'
                }
            }
        }
        stage('Run Cypress Tests') {
            steps {
                script {
                    bat 'npx cypress run --reporter junit'
                }
            }
        }
        stage('Run Browserstack Tests') {
            steps {
                script {
                    bat 'browserstack-cypress run'
                }
            }
        }
        stage('Run K6 Tests') {
            steps {
                script {
                    bat 'k6 run k6test.js'
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'results/test-output-*.xml', allowEmptyArchive: true
            junit 'results/test-output-*.xml'
        }
    }
}