pipeline {
    agent any
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
    }
    post {
        always {
            archiveArtifacts artifacts: 'results/test-output-*.xml', allowEmptyArchive: true
            junit 'results/test-output-*.xml'
        }
    }
}