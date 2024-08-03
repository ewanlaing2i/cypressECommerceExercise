pipeline {
    agent {
        docker {
            image 'cypress/included:10.11.0' 
            args '-u root' 
        }
    }
    stages {
        stage('Checkout and Install Dependencies') {
            steps {
                script {
 
                    
                    sh 'npm install'
                }
            }
        }
 
        stage('Run Cypress Tests') {
            steps {
                script {
                    sh 'npx cypress run --spec cypress/e2e/testCase1.cy.js'
                }
            }
        }
    }

}