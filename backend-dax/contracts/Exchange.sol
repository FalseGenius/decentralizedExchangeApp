// SPDX-License-Identifier: MIT

pragma solidity^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Exchange is ERC20 {

    address public cryptoDevTokenAddress;

    constructor(address _CryptoDevtoken) ERC20("CryptoDev LP Token", "CDLP") {
        require(_CryptoDevtoken != address(0), "Token passed is a null address");
        cryptoDevTokenAddress = _CryptoDevtoken;
    }


    function getReserve() public view returns (uint) {
        return ERC20(cryptoDevTokenAddress).balanceOf(address(this));
    }

    function addLiquidity(uint _amount) public payable returns (uint) {
        uint liquidity;
        uint ethBalance = address(this).balance;
        uint cryptoDevTokenReserve = getReserve();
        ERC20 cryptoDevToken = ERC20(cryptoDevTokenAddress);

        if (cryptoDevTokenReserve == 0) {
            cryptoDevToken.transferFrom(msg.sender, address(this), _amount);
            liquidity = ethBalance;
            _mint(msg.sender, liquidity);
        } else {
            uint ethReserve = ethBalance - msg.value;
            uint cryptoDevTokenAmount = (msg.value * cryptoDevTokenReserve) / (ethReserve);
            require(_amount >= cryptoDevTokenAmount, "Amount of tokens sent is less than minimum tokens required");
            cryptoDevToken.transferFrom(msg.sender, address(this), cryptoDevTokenAmount);
            liquidity = (totalSupply() * msg.value) / ethReserve;
            _mint(msg.sender, liquidity);
        }

        return liquidity;
    }

    function removeLiquidity(uint _amount) public payable returns (uint, uint) {
        require(_amount > 0, "_amount should be greater than zero");
        uint ethReserve = address(this).balance;
        // total supply of LP tokens
        uint _totalSupply = totalSupply();
        uint ethAmount = (ethReserve * _amount) / _totalSupply;
        uint cryptDevTokenAmount = (getReserve() * _amount) / _totalSupply;
        _burn(msg.sender, _amount);
        payable(msg.sender).transfer(ethAmount);
        ERC20(cryptoDevTokenAddress).transfer(msg.sender, cryptDevTokenAmount);
        return (ethAmount, cryptDevTokenAmount);
    }

    function getAmountOfTokens(uint256 inputAmount, uint256 inputReserve, uint256 outputReserve) public pure returns (uint256)  {
        require(inputReserve > 0 && outputReserve > 0, "Invalid reserves");
        uint256 inputAmountWitFees = (inputAmount * 99) / 100;
        uint256 numerator = inputAmountWitFees * outputReserve;
        uint256 denominator = (inputReserve*100) + inputAmountWitFees;
        return numerator / denominator;
    }

    function ethToCryptoDevToken(uint _minTokens) public payable {
        uint256 tokenReserve = getReserve();
        uint256 tokensBought = getAmountOfTokens((msg.value), address(this).balance - msg.value, tokenReserve);
        require(tokensBought >= _minTokens, "Insufficient output amount");
        ERC20(cryptoDevTokenAddress).transfer(msg.sender, tokensBought);
    }

    function cryptoDevTokenToEth(uint _tokenSold, uint _minEth) public {
        uint256 tokenReserve = getReserve();
        uint256 ethBought = getAmountOfTokens(_tokenSold, tokenReserve, address(this).balance);
        require(ethBought >= _minEth, "Insufficient output amount");
        ERC20(cryptoDevTokenAddress).transfer(msg.sender, ethBought);
        payable(msg.sender).transfer(ethBought);
    }

}