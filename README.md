# Clinical Trial Churn Prediction and Recommendation System

This web-based application predicts **patient churn** in clinical trials based on patient information and provides **recommendations** to improve retention. It leverages machine learning models trained on real-world data to help clinical researchers proactively manage participant dropout risk.

##  Project Overview

Clinical trial participant retention is critical for the success of any research study. This project aims to:
- **Predict churn** (likelihood of dropout) using patient and trial-specific data.
- **Provide actionable recommendations** to reduce churn based on predicted outcomes.
- Deliver a **user-friendly web interface** for researchers and clinicians.

##  Machine Learning Models Used

Trained on labeled clinical trial data using the following supervised ML algorithms:
- **Random Forest Classifier**
- **XGBoost Classifier**
- **Gradient Boosting Classifier**

The models were evaluated using metrics such as **accuracy**, **precision**, **recall**, and **ROC-AUC**. The best-performing model is integrated into the web app.

## Features

-  Input patient and trial data via an interactive form
-  Real-time churn prediction
-  Intelligent recommendations to improve retention
-  Backend powered by pre-trained ML models
-  Model performance evaluation dashboard (optional)

##  Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Bootstrap
- **Backend:** Flask (Python)
- **ML Libraries:** scikit-learn, XGBoost, pandas, numpy
- **Deployment:** (e.g., Heroku / Streamlit / Render) *(Specify if deployed)*

##  Web App Preview

![App Screenshot](screenshot.png) <!-- Replace with your screenshot -->

##  Project Structure

