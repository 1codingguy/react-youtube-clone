// Unable to style the arrows as I like, thus not using
// TODO: https://mui.com/api/tabs/ ScrollButtonComponent={<ScrollButtonWithGradientBackground/>}
const TabsWithArrows = styled(Tabs)`
  .Mui-disabled {
    /* width: 10px;
    transition: all 0.2s cubic-bezier(0.05, 0, 0, 1); */
    /* transform: scaleX(0.5);
    transform: translateX(-20px); */
  }

  .MuiTabs-scrollable {
    display: flex;
    align-items: center;
    /* padding-left: 1rem; */
  }

  .MuiTabs-scrollButtons:first-of-type {
    /* background-color: red; */

    &.Mui-disabled {
      flex-shrink: 1;
      transition: flex 0.3s ease;
    }

    &::before {
      @media screen and (max-width: ${MOBILE_VIEW_MAX_WIDTH}px) {
        height: calc(${MOBILE_CATEGORIES_BAR_HEIGHT}px - 4px);
      }
      height: calc(${DESKTOP_CATEGORIES_BAR_HEIGHT}px - 6px);
      width: 50px;
      position: fixed;
      left: calc(40px + ${(props) => props.marginLeftToOffset}px);
      pointer-events: none;
      content: '';
      /* doesn't do the fade out effect as intended */
      background: linear-gradient(
        to right,
        white 20%,
        rgba(255, 255, 255, 0) 80%
      );
      /* background-color: red; */
    }
  }
  .MuiTabScrollButton-root:last-of-type {
    /* background-color: yellow; */

    &::before {
      @media screen and (max-width: ${MOBILE_VIEW_MAX_WIDTH}px) {
        height: calc(${MOBILE_CATEGORIES_BAR_HEIGHT}px - 4px);
      }
      height: calc(${DESKTOP_CATEGORIES_BAR_HEIGHT}px - 6px);
      width: 50px;
      position: fixed;
      right: 40px;
      content: '';
      pointer-events: none;
      background: linear-gradient(
        to left,
        white 20%,
        rgba(255, 255, 255, 0) 80%
      );
    }
  }
`
