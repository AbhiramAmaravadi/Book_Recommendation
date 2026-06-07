import pandas as pd

df = pd.read_csv(
    "data/books.csv",
    encoding="utf-8",
    on_bad_lines="skip",
    low_memory=False
)

print(df.shape)
print(df.head())