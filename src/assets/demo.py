import pandas as pd

data=pd.read_json('datas.json')


filtered_data = data.drop_duplicates(subset='NAME')

# Convert the DataFrame back to JSON format
filtered_json = filtered_data.to_json(orient='records')

# Write the filtered data back to a JSON file
with open('filtered_data.json', 'w') as f:
    f.write(filtered_json)
