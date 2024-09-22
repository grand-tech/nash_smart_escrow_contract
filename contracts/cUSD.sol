// SPDX-License-Identifier: Apache-2.0

/**
 *Submitted for verification at Etherscan.io on 2020-01-31
 */
pragma solidity 0.8.24;

// import "hardhat/console.sol";
import "node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";

/**
 * cUSD Contract
 */
contract cUSD {
    using SafeMath for uint256;
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;
    address public owner;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );
    event Mint(address indexed to, uint256 amount);
    event MintingFinished();
    event Burn(uint256 amount);

    constructor(
        uint256 initialSupply,
        string memory tokenName,
        uint8 decimalUnits,
        string memory tokenSymbol
    ) {
        balanceOf[msg.sender] = initialSupply;
        totalSupply = initialSupply;
        name = tokenName;
        symbol = tokenSymbol;
        decimals = decimalUnits;
        owner = msg.sender;
    }

    /**
     * Transfer functions
     */
    function transfer(
        address _to,
        uint256 _value
    ) public returns (bool success) {
        require(_to != address(this));
        require(_to != address(0), "Cannot use zero address");
        require(_value > 0, "Cannot use zero value");

        require(balanceOf[msg.sender] >= _value, "Balance not enough"); // Check if the sender has enough
        require(balanceOf[_to] + _value >= balanceOf[_to], "Overflow"); // Check for overflows

        uint previousBalances = balanceOf[_to].add(balanceOf[_to]);

        balanceOf[msg.sender] = balanceOf[msg.sender].sub(_value); // Subtract from the sender
        balanceOf[_to] = balanceOf[_to].add(_value); // Add the same to the recipient

        emit Transfer(msg.sender, _to, _value); // Notify anyone listening that this transfer took place

        assert(balanceOf[msg.sender] + balanceOf[_to] == previousBalances);

        return true;
    }

    function approve(
        address _spender,
        uint256 _value
    ) public returns (bool success) {
        require(_value > 0, "Cannot use zero");

        allowance[msg.sender][_spender] = _value;

        emit Approval(msg.sender, _spender, _value);

        return true;
    }

    function multiTransfer(
        address[] memory _receivers,
        uint256[] memory _values
    ) public returns (bool success) {
        require(_receivers.length <= 200, "Too many recipients");

        for (uint256 i = 0; i < _receivers.length; i++) {
            transfer(_receivers[i], _values[i]);
        }

        return true;
    }

    function multiTransferSingleValue(
        address[] memory _receivers,
        uint256 _value
    ) public returns (bool success) {
        uint256 toSend = _value * 10 ** 6;

        require(_receivers.length <= 200, "Too many recipients");

        for (uint256 i = 0; i < _receivers.length; i++) {
            transfer(_receivers[i], toSend);
        }

        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool success) {
        require(_to != address(0), "Cannot use zero address");
        require(_value > 0, "Cannot use zero value");

        require(balanceOf[_from] >= _value, "Balance not enough");
        require(balanceOf[_to] + _value > balanceOf[_to], "Cannot overflow");

        require(
            _value <= allowance[_from][msg.sender],
            "Cannot over allowance"
        );

        balanceOf[_from] = balanceOf[_from].sub(_value);
        balanceOf[_to] = balanceOf[_to].add(_value);

        allowance[_from][msg.sender] = allowance[_from][msg.sender].sub(_value);

        emit Transfer(_from, _to, _value);

        return true;
    }

    /**
     * Ownership functions
     */
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function transferOwnership(address newOwner) public {
        require(newOwner != address(0));
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    /**
     * Minting functions
     */
    bool public mintingFinished = false;

    address public creator;
    address public destroyer;

    modifier canMint() {
        require(!mintingFinished);
        _;
    }

    modifier whenMintingFinished() {
        require(mintingFinished);
        _;
    }

    modifier onlyCreator() {
        require(msg.sender == creator);
        _;
    }

    function setCreator(address _creator) external onlyOwner {
        require(_creator != address(0), "Cannot use zero address");
        creator = _creator;
    }

    function mint(
        address _to,
        uint256 _amount
    ) external onlyCreator canMint returns (bool) {
        require(_to != address(0), "Cannot use zero address");
        require(balanceOf[_to] + _amount > balanceOf[_to]);
        require(totalSupply + _amount > totalSupply);

        totalSupply = totalSupply.add(_amount);
        balanceOf[_to] = balanceOf[_to].add(_amount);

        emit Mint(_to, _amount);

        return true;
    }

    function finishMinting() external onlyCreator returns (bool) {
        mintingFinished = true;
        emit MintingFinished();

        return true;
    }

    /**
     * Burning functions
     */

    modifier onlyDestroyer() {
        require(msg.sender == destroyer);
        _;
    }

    function setDestroyer(address _destroyer) external onlyOwner {
        require(_destroyer != address(0), "Cannot use zero address");
        destroyer = _destroyer;
    }

    function burn(uint256 _amount) external onlyDestroyer {
        require(balanceOf[destroyer] >= _amount && _amount > 0);

        balanceOf[destroyer] = balanceOf[destroyer].sub(_amount);
        totalSupply = totalSupply.sub(_amount);

        emit Burn(_amount);
    }
}
