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
                    // Install dependencies using npm
                    bat 'npm install'
                    bat 'npx cypress install'
                    bat 'npm install -g browserstack-cypress-cli'
                }
            }
        }
        stage('Run Cypress Tests') {
            steps {
                script {
                    // Run Cypress tests and generate JUnit reports
                    bat 'npx cypress run --reporter junit --reporter-options "mochaFile=results/test-output-[hash].xml"'
                }
            }
        }
        stage('Run Browserstack Tests') {
            steps {
                script {
                    // Run Browserstack tests
                    bat 'browserstack-cypress run'
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