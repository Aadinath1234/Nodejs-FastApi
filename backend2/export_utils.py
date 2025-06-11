import requests

def get_user_tasks(user_id: str):
    url = f"http://localhost:5000/api/tasks?userId={user_id}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.HTTPError as e:
        print(f"HTTP error: {e} - Response content: {response.text}")
        return []
    except Exception as e:
        print(f"Error: {e}")
        return []
