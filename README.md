# 🥞 Meal Split 👛

## About this project

Trying to figure out how much you owe your friends or how much you cover after a great meal? Don't bother anymore! Use _Meal Split_ to keep track of it. Securing your wallet and friendship at the same time is no less than easy.

## Features

- Users can add a new friend to the list
- Users can see how much they owe a friend, and vice versa
- Users can update how much they owe a friend on split bill form, and vice versa
- Split bill from will validates user input, preventing users paying more than bill requires.

## State management

The `friends` and `selectedFriend`state is defined in the `App` component instead of `FriendList` or `Friend`component. This decision is related to the requirement of data sharing .

The benefits of _lifting up state_ are:

1. **Single source of truth:** The state in the parent component (`App`) serves as a single source of truth for the open item index, centralizing the data of friends of and ensures that all child components have access to the same state value.

2. **Consistency and synchronization:**
   Sharing the same state instead of having its own state allows child components to coordinate.

3. **Ease of control:**
   By placing the state in the parent component, the parent can implement additional logic if needed, all management in one place.

4. **Efficiency:**
   Changing state at higher levels in the component tree can lead to optimized re-rendering in React.

## Screenshot

![screenshot](https://github.com/Xavier-Hsiao/meal-split/blob/master/src/assets/meal-split-using.png)
