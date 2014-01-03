# Path Convert

> A simple Unix <-> Windows path converter

This is a simple Node tool that will convert back and forth between Windows and Unix-style paths.

The conversion is pretty simple, if the input path contains backslashes (\\) then it assumes Windows -> Unix and if it contains slashes (/) it will convert Unix -> Windows.

Because it's a Node app it should pretty much work anywhere you have your Node environment set up (Windows CMD, Msys Git command prompt, etc.). It works well in a Windows Msys environment where you're likely to run into both path styles at some point.


## Installation

This tool is designed to be run from the command-line.

```bash
npm install --global git://github.com/Coridyn/path-convert.git
```

This will set up the tool with the global `pc` command.


## Usage

The tool will read the path as an input argument or read it from stdin.

_Option 1:_ Path as an input argument: 

```bash
$ pc /C/Users/username
C:\Users\username
```


_Option 2:_ Read from stdin:

```bash
$ pc
Enter path:
C:\Users\username
/C/Users/username
```

You can easily chain it together with other commands too.

On Windows:

```bash
cd | pc
```

In Bash (or similar shells):

```bash
$ pwd | pc
```


On Windows copy the converted path to the clipboard like this:

```bash
cd | pc | clip
```

In a Bash shell on Windows:

```bash
pwd | pc | clip
```


__NOTE:__ On Unix-style shells you might need to escape or quote backslashes.

If you get output like this:
```bash
pc c:\Users\username
c:Usersusername
```

Quote the input path:
```bash
pc "c:\Users\username"
/c/Users/username
```

Or escape the backslashes:
```bash
pc c:\\Users\\username
/c/Users/username
```
