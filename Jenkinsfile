pipeline {
    agent any
 
    stages {
        stage('Checkout and Install Dependencies') {
            steps {
                script {
 
                    // Install project dependencies including Cypress
                    sh 'npm install'
                }
            }
        }
 
        stage('Run Cypress Tests') {
            steps {
                script {
                    //TEST
                    // Run Cypress tests
                    sh 'npx cypress run --spec cypress/e2e/testCase1.cy.js'
                }
            }
        }
    }

}