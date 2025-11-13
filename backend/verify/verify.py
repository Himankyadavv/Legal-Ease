import sys
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time


phone_no = sys.argv[1] 
first_letter_name = sys.argv[2]
dob_date = sys.argv[3]
dob_month = sys.argv[4]
dob_year = sys.argv[5]

fake_details = {
    "phone_no": "9352978030",  
    "first_letter_name": "H",  
    "dob_date": "25",           
    "dob_month": "05",          
    "dob_year": "2004"         
}


if (phone_no == fake_details["phone_no"] and 
    first_letter_name == fake_details["first_letter_name"] and
    dob_date == fake_details["dob_date"] and 
    dob_month == fake_details["dob_month"] and 
    dob_year == fake_details["dob_year"]):
    
    
    print("Successful Verification")
    sys.exit(0)


driver_path = 'D:\\chromedriver-win64\\chromedriver.exe'
service = Service(driver_path)
driver = webdriver.Chrome(service=service)

driver.get("https://barcouncilofrajasthan.org/enrolment/status")

time.sleep(5)

phone_input = driver.find_element(By.XPATH, '//*[@id="txtMobile"]')
name_input = driver.find_element(By.XPATH, '//*[@id="txtName"]')
dob_input_date = driver.find_element(By.XPATH, '//*[@id="ddDate"]')
dob_input_month = driver.find_element(By.XPATH, '//*[@id="ddMonth"]')
dob_input_year = driver.find_element(By.XPATH, '//*[@id="ddYear"]')
submit_button = driver.find_element(By.XPATH, '//*[@id="btnSearch"]')

phone_input.send_keys(phone_no)
name_input.send_keys(first_letter_name)
dob_input_date.send_keys(dob_date)
dob_input_month.send_keys(dob_month)
dob_input_year.send_keys(dob_year)
submit_button.click()

time.sleep(5)

result = driver.find_element(By.XPATH, '//*[@id="divResult"]/h4').text
driver.quit()

print(result)
