arr = [2, 7, 11, 5]
target = 9

# brute force approach
for i in range(len(arr)):
    for j in range(i + 1, len(arr)):
        if arr[i] == target - arr[j]:
            print(arr[i], arr[j])

# optimal approach
seen = {}

for i,val in enumerate(arr):
    complement = target - val

    if complement in seen:
        print(seen[complement],i)
        break

    seen[val] = i