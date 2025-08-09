# class Solution(object):
#     def maxProfit(self, prices):
#         """
#         :type prices: List[int]
#         :rtype: int
#         """
#         min_price = prices[0]
#         max_profit = 0

#         for price in prices:
#             # Update min_price if current price is lower
#             min_price = min(min_price, price)
#             # Calculate profit if sold today
#             profit = price - min_price
#             max_profit = max(max_profit, profit)

#         return max_profit

# # Example run
# prices = [12, 11, 45, 67, 9]
# print(Solution().maxProfit(prices))  # Output: 56

class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        min_price = float('inf')
        max_profit = 0
        for price in prices:
            if price < min_price:
                min_price = price
            elif price - min_price > max_profit:
                max_profit = price - min_price
        return max_profit

# Example run
prices = [12, 11, 45, 67, 9]
print(Solution().maxProfit(prices))  # Output: 56