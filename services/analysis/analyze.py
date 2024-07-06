import sys
import mysql.connector

def analyze_drone(flight_id):

    issues = "None"

    conn = mysql.connector.connect(user='root', password='us07$$killua', host='127.0.0.1', database='drone_management')
    cursor = conn.cursor()


    update_query = "UPDATE flights SET issues = %s WHERE id = %s"
    cursor.execute(update_query, (issues, flight_id))
    conn.commit()

    cursor.close()
    conn.close()

if __name__ == "__main__":
    flight_id = sys.argv[1]
    analyze_drone(flight_id)
