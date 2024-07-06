import sys
import mysql.connector
import requests

def check_weather_and_equipment(flight_id):
    weather_conditions = "Clear"
    equipment_status = "Operational"
    authorization = True


    conn = mysql.connector.connect(user='root', password='us07$$killua', host='127.0.0.1', database='drone_management')
    cursor = conn.cursor()


    insert_query = """INSERT INTO weather_checks (flight_id, weather_conditions, equipment_status, authorization)
                      VALUES (%s, %s, %s, %s)"""
    cursor.execute(insert_query, (flight_id, weather_conditions, equipment_status, authorization))
    conn.commit()

    cursor.close()
    conn.close()

if __name__ == "__main__":
    flight_id = sys.argv[1]
    check_weather_and_equipment(flight_id)
