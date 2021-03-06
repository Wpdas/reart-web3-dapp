const shortenAddress = (address: string, shownEndChars = 24) =>
  address
    ? `${address.slice(0, 5)}...${address.slice(
        address.length - shownEndChars,
      )}`
    : '';

export default shortenAddress;
